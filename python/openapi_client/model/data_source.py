"""
    CureDAO Unified Health API

    A community-owned platform for crowdsourced clinical research  # noqa: E501

    The version of the OpenAPI document: 0.0.1
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

import nulltype  # noqa: F401

from openapi_client.model_utils import (  # noqa: F401
    ApiTypeError,
    ModelComposed,
    ModelNormal,
    ModelSimple,
    cached_property,
    change_keys_js_to_python,
    convert_js_args_to_python_args,
    date,
    datetime,
    file_type,
    none_type,
    validate_get_composed_info,
)

def lazy_import():
    from openapi_client.model.button import Button
    from openapi_client.model.card import Card
    from openapi_client.model.connect_instructions import ConnectInstructions
    globals()['Button'] = Button
    globals()['Card'] = Card
    globals()['ConnectInstructions'] = ConnectInstructions


class DataSource(ModelNormal):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Attributes:
      allowed_values (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          with a capitalized key describing the allowed value and an allowed
          value. These dicts store the allowed enum values.
      attribute_map (dict): The key is attribute name
          and the value is json key in definition.
      discriminator_value_class_map (dict): A dict to go from the discriminator
          variable value to the discriminator class name.
      validations (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          that stores validations for max_length, min_length, max_items,
          min_items, exclusive_maximum, inclusive_maximum, exclusive_minimum,
          inclusive_minimum, and regex.
      additional_properties_type (tuple): A tuple of classes accepted
          as additional properties values.
    """

    allowed_values = {
    }

    validations = {
    }

    additional_properties_type = None

    _nullable = False

    @cached_property
    def openapi_types():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded

        Returns
            openapi_types (dict): The key is attribute name
                and the value is attribute type.
        """
        lazy_import()
        return {
            'affiliate': (bool,),  # noqa: E501
            'connector_client_id': (str,),  # noqa: E501
            'default_variable_category_name': (str,),  # noqa: E501
            'display_name': (str,),  # noqa: E501
            'enabled': (int,),  # noqa: E501
            'get_it_url': (str,),  # noqa: E501
            'id': (int,),  # noqa: E501
            'image': (str,),  # noqa: E501
            'image_html': (str,),  # noqa: E501
            'linked_display_name_html': (str,),  # noqa: E501
            'long_description': (str,),  # noqa: E501
            'name': (str,),  # noqa: E501
            'short_description': (str,),  # noqa: E501
            'background_color': (str,),  # noqa: E501
            'buttons': ([Button],),  # noqa: E501
            'card': (Card,),  # noqa: E501
            'client_id': (str,),  # noqa: E501
            'connected': (bool,),  # noqa: E501
            'connect_error': (str,),  # noqa: E501
            'connect_instructions': (ConnectInstructions,),  # noqa: E501
            'connector_id': (int,),  # noqa: E501
            'connect_status': (str,),  # noqa: E501
            'count': (int,),  # noqa: E501
            'created_at': (str,),  # noqa: E501
            'last_successful_updated_at': (str,),  # noqa: E501
            'last_update': (int,),  # noqa: E501
            'message': (str,),  # noqa: E501
            'mobile_connect_method': (str,),  # noqa: E501
            'platforms': ([str],),  # noqa: E501
            'premium': (bool,),  # noqa: E501
            'scopes': ([str],),  # noqa: E501
            'spreadsheet_upload_link': (str,),  # noqa: E501
            'total_measurements_in_last_update': (int,),  # noqa: E501
            'updated_at': (str,),  # noqa: E501
            'update_requested_at': (str,),  # noqa: E501
            'update_status': (str,),  # noqa: E501
            'user_id': (int,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'affiliate': 'affiliate',  # noqa: E501
        'connector_client_id': 'connectorClientId',  # noqa: E501
        'default_variable_category_name': 'defaultVariableCategoryName',  # noqa: E501
        'display_name': 'displayName',  # noqa: E501
        'enabled': 'enabled',  # noqa: E501
        'get_it_url': 'getItUrl',  # noqa: E501
        'id': 'id',  # noqa: E501
        'image': 'image',  # noqa: E501
        'image_html': 'imageHtml',  # noqa: E501
        'linked_display_name_html': 'linkedDisplayNameHtml',  # noqa: E501
        'long_description': 'longDescription',  # noqa: E501
        'name': 'name',  # noqa: E501
        'short_description': 'shortDescription',  # noqa: E501
        'background_color': 'backgroundColor',  # noqa: E501
        'buttons': 'buttons',  # noqa: E501
        'card': 'card',  # noqa: E501
        'client_id': 'clientId',  # noqa: E501
        'connected': 'connected',  # noqa: E501
        'connect_error': 'connectError',  # noqa: E501
        'connect_instructions': 'connectInstructions',  # noqa: E501
        'connector_id': 'connectorId',  # noqa: E501
        'connect_status': 'connectStatus',  # noqa: E501
        'count': 'count',  # noqa: E501
        'created_at': 'createdAt',  # noqa: E501
        'last_successful_updated_at': 'lastSuccessfulUpdatedAt',  # noqa: E501
        'last_update': 'lastUpdate',  # noqa: E501
        'message': 'message',  # noqa: E501
        'mobile_connect_method': 'mobileConnectMethod',  # noqa: E501
        'platforms': 'platforms',  # noqa: E501
        'premium': 'premium',  # noqa: E501
        'scopes': 'scopes',  # noqa: E501
        'spreadsheet_upload_link': 'spreadsheetUploadLink',  # noqa: E501
        'total_measurements_in_last_update': 'totalMeasurementsInLastUpdate',  # noqa: E501
        'updated_at': 'updatedAt',  # noqa: E501
        'update_requested_at': 'updateRequestedAt',  # noqa: E501
        'update_status': 'updateStatus',  # noqa: E501
        'user_id': 'userId',  # noqa: E501
    }

    _composed_schemas = {}

    required_properties = set([
        '_data_store',
        '_check_type',
        '_spec_property_naming',
        '_path_to_item',
        '_configuration',
        '_visited_composed_classes',
    ])

    @convert_js_args_to_python_args
    def __init__(self, affiliate, connector_client_id, default_variable_category_name, display_name, enabled, get_it_url, id, image, image_html, linked_display_name_html, long_description, name, short_description, *args, **kwargs):  # noqa: E501
        """DataSource - a model defined in OpenAPI

        Args:
            affiliate (bool): Ex: true
            connector_client_id (str): Ex: ba7d0c12432650e23b3ce924ae2d21e2ff59e7e4e28650759633700af7ed0a30
            default_variable_category_name (str): Ex: Foods
            display_name (str): Ex: CureDAO
            enabled (int): Ex: 0
            get_it_url (str): Ex: https://curedao.org
            id (int): Ex: 72
            image (str): Ex: https://app.curedao.org/img/logos/curedao-logo-qm-rainbow-200-200.png
            image_html (str): Ex: <a href=\"https://curedao.org\"><img id=\"curedao_image\" title=\"CureDAO\" src=\"https://app.curedao.org/img/logos/curedao-logo-qm-rainbow-200-200.png\" alt=\"CureDAO\"></a>
            linked_display_name_html (str): Ex: <a href=\"https://curedao.org\">CureDAO</a>
            long_description (str): Ex: CureDAO is a Chrome extension, Android app, iOS app, and web app that allows you to easily track mood, symptoms, or any outcome you want to optimize in a fraction of a second.  You can also import your data from over 30 other apps and devices like Fitbit, Rescuetime, Jawbone Up, Withings, Facebook, GitHub, Google Calendar, Runkeeper, MoodPanda, Slice, Google Fit, and more.  CureDAO then analyzes your data to identify which hidden factors are most likely to be influencing your mood or symptoms and their optimal daily values.
            name (str): Ex: curedao
            short_description (str): Ex: Tracks anything

        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            background_color (str): Background color HEX code that matches the icon. [optional]  # noqa: E501
            buttons ([Button]): [optional]  # noqa: E501
            card (Card): [optional]  # noqa: E501
            client_id (str): Your CureDAO client id can be obtained by creating an app at https://builder.curedao.org. [optional]  # noqa: E501
            connected (bool): True if the authenticated user has this connector enabled. [optional]  # noqa: E501
            connect_error (str): Ex: Your token is expired. Please re-connect. [optional]  # noqa: E501
            connect_instructions (ConnectInstructions): [optional]  # noqa: E501
            connector_id (int): Ex: 8. [optional]  # noqa: E501
            connect_status (str): Ex: CONNECTED. [optional]  # noqa: E501
            count (int): Number of measurements from this source or number of users who have measurements from this source. [optional]  # noqa: E501
            created_at (str): Ex: 2000-01-01 00:00:00 UTC ISO 8601 YYYY-MM-DDThh:mm:ss. [optional]  # noqa: E501
            last_successful_updated_at (str): Ex: 2017-07-31 10:10:34 UTC ISO 8601 YYYY-MM-DDThh:mm:ss. [optional]  # noqa: E501
            last_update (int): Epoch timestamp of last sync. [optional]  # noqa: E501
            message (str): Ex: Got 412 new measurements on 2017-07-31 10:10:34. [optional]  # noqa: E501
            mobile_connect_method (str): Mobile connect method: webview, cordova, google, spreadsheet, or ip. [optional]  # noqa: E501
            platforms ([str]): Platforms (chrome, android, ios, web) that you can connect on.. [optional]  # noqa: E501
            premium (bool): True if connection requires upgrade. [optional]  # noqa: E501
            scopes ([str]): Required connector scopes. [optional]  # noqa: E501
            spreadsheet_upload_link (str): URL to POST a spreadsheet to (if available for this data source). [optional]  # noqa: E501
            total_measurements_in_last_update (int): Number of measurements obtained during latest update. [optional]  # noqa: E501
            updated_at (str): Ex: 2017-07-31 10:10:34 UTC ISO 8601 YYYY-MM-DDThh:mm:ss. [optional]  # noqa: E501
            update_requested_at (str): Ex: 2017-07-18 05:16:31 UTC ISO 8601 YYYY-MM-DDThh:mm:ss. [optional]  # noqa: E501
            update_status (str): Ex: UPDATED. [optional]  # noqa: E501
            user_id (int): Ex: 230. [optional]  # noqa: E501
        """

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', False)
        _path_to_item = kwargs.pop('_path_to_item', ())
        _configuration = kwargs.pop('_configuration', None)
        _visited_composed_classes = kwargs.pop('_visited_composed_classes', ())

        if args:
            raise ApiTypeError(
                "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments." % (
                    args,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        self.affiliate = affiliate
        self.connector_client_id = connector_client_id
        self.default_variable_category_name = default_variable_category_name
        self.display_name = display_name
        self.enabled = enabled
        self.get_it_url = get_it_url
        self.id = id
        self.image = image
        self.image_html = image_html
        self.linked_display_name_html = linked_display_name_html
        self.long_description = long_description
        self.name = name
        self.short_description = short_description
        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
