"""
    CureDAO Unified Health API

    A community-owned platform for crowdsourced clinical research  # noqa: E501

    The version of the OpenAPI document: 0.0.1
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

import openapi_client
from openapi_client.model.card import Card
from openapi_client.model.error_response import ErrorResponse
from openapi_client.model.image import Image
from openapi_client.model.user import User
globals()['Card'] = Card
globals()['ErrorResponse'] = ErrorResponse
globals()['Image'] = Image
globals()['User'] = User
from openapi_client.model.users_response import UsersResponse


class TestUsersResponse(unittest.TestCase):
    """UsersResponse unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testUsersResponse(self):
        """Test UsersResponse"""
        # FIXME: construct object with mandatory attributes with example values
        # model = UsersResponse()  # noqa: E501
        pass


if __name__ == '__main__':
    unittest.main()
