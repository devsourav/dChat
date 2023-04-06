// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

library Utility {
    // To check EOA or CA.
    function isContractAccount(address account) internal view returns (bool) {
        return account.code.length > 0;
    }

    // To check is account address or not.
    function isAccount(address account) internal pure returns (bool) {
        return address(account) == account;
    }

    // Check string length zero or not.
    function isStringNotEmpty(string memory _str) internal pure returns (bool) {
        bytes memory str = bytes(_str);
        return str.length != 0;
    }

    // Compare two strings.
    function compareStrings(
        string memory _strA,
        string memory _strB
    ) internal pure returns (bool) {
        bytes memory strA = bytes(_strA);
        bytes memory strB = bytes(_strB);

        if (strA.length != strB.length) {
            return false;
        }

        for (uint256 i = 0; i < strA.length; i++) {
            if (strA[i] != strB[i]) {
                return false;
            }
        }
        return true;
    }

    // To generate hash
    function generateHash(string memory _str) internal view returns (bytes32) {
        return keccak256(abi.encodePacked(_str, block.timestamp, msg.sender));
    }

    // To check valid byte32 value
    function isValidBytes32(bytes32 value) public pure returns (bool) {
        return (value.length == 32 &&
            value !=
            0x0000000000000000000000000000000000000000000000000000000000000000);
    }
}
