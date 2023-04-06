// SPDX-License-Identifier: MIT

pragma solidity >=0.8.2 <0.9.0;

import "./Utility.sol";

contract User {
    uint256 public totalActiveUser;
    uint256 public nextUserCount;

    // User details structure
    struct UserData {
        bytes32 userId;
        string avatar;
        string userName;
        bytes1 gender;
        bool status;
    }

    mapping(address => UserData) userDataMap; // collect all user's data
    mapping(string => address) userNameMap; // collect all userNames;
    mapping(bytes32 => address) userIdMap; // collect all userId;

    event StatusAlert(string message, address caller);
    error ErrorAlert(string message, address caller);

    // To check EOA or CA.
    modifier isContractAccount() {
        require(
            msg.sender.code.length == 0,
            "Access restrict to contract account"
        );
        _;
    }

    // To check user exist or not
    modifier CheckUserExist(bool flag) {
        string memory message;
        if (
            Utility.isValidBytes32(userDataMap[msg.sender].userId) &&
            userIdMap[userDataMap[msg.sender].userId] == msg.sender
        ) {
            if (flag) {
                message = "You are already registered!";
                emit StatusAlert(message, msg.sender);
                revert ErrorAlert(message, msg.sender);
            }
        } else {
            if (!flag) {
                message = "You are not a registered user!";
                emit StatusAlert(message, msg.sender);
                revert ErrorAlert(message, msg.sender);
            }
        }
        _;
    }

    // To chack username
    modifier CheckUserName(string calldata _userName) {
        require(
            userNameMap[_userName] == address(0),
            "Username already taken!"
        );
        _;
    }

    // Create user
    function createUser(
        string calldata _avatar,
        string calldata _userName,
        bytes1 _gender
    ) public CheckUserName(_userName) CheckUserExist(true) returns (bytes32) {
        bytes32 _userId = Utility.generateHash(_userName);
        userDataMap[msg.sender] = UserData(
            _userId,
            _avatar,
            _userName,
            _gender,
            true
        );
        userNameMap[_userName] = msg.sender;
        userIdMap[_userId] = msg.sender;
        nextUserCount++;
        totalActiveUser++;
        emit StatusAlert("User profile created", msg.sender);
        return _userId;
    }

    // To update user status
    function updateUserStatus(bool _status) public CheckUserExist(false) {
        userDataMap[msg.sender].status = _status;
        if (_status) {
            totalActiveUser++;
            emit StatusAlert("User activated successfully", msg.sender);
        } else {
            totalActiveUser--;
            emit StatusAlert("User deactivated successfully", msg.sender);
        }
    }

    // Get user details by username.
    function getUserByName(
        string memory _userName
    ) public CheckUserExist(false) returns (UserData memory) {
        require(
            Utility.isStringNotEmpty(_userName),
            "Please provide a valid name."
        );
        if (Utility.isAccount(userNameMap[_userName])) {
            return userDataMap[userNameMap[_userName]];
        } else {
            string memory message = "User not found!";
            emit StatusAlert(message, msg.sender);
            revert ErrorAlert(message, msg.sender);
        }
    }

    // Get user details by user ID.
    function getUserById(
        bytes32 _userId
    ) public CheckUserExist(false) returns (UserData memory) {
        if (Utility.isValidBytes32(_userId)) {
            return userDataMap[userIdMap[_userId]];
        } else {
            string memory message = "Please provide a valid user ID";
            emit StatusAlert(message, msg.sender);
            revert ErrorAlert(message, msg.sender);
        }
    }

    // Get profile details by user address.
    function getUserData(
        address _userAddress
    ) public CheckUserExist(false) returns (UserData memory) {
        if (Utility.isAccount(_userAddress)) {
            return userDataMap[_userAddress];
        } else {
            string memory message = "Please provide a valid user address";
            emit StatusAlert(message, msg.sender);
            revert ErrorAlert(message, msg.sender);
        }
    }
}
