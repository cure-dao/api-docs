"""
    CureDAO Unified Health API

    A platform for participant-centered research and personal data exploration  # noqa: E501

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
    from openapi_client.model.conversion_step import ConversionStep
    from openapi_client.model.unit_category import UnitCategory
    globals()['ConversionStep'] = ConversionStep
    globals()['UnitCategory'] = UnitCategory


class Unit(ModelNormal):
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
        ('category',): {
            'DISTANCE': "Distance",
            'DURATION': "Duration",
            'ENERGY': "Energy",
            'FREQUENCY': "Frequency",
            'MISCELLANY': "Miscellany",
            'PRESSURE': "Pressure",
            'PROPORTION': "Proportion",
            'RATING': "Rating",
            'TEMPERATURE': "Temperature",
            'VOLUME': "Volume",
            'WEIGHT': "Weight",
            'COUNT': "Count",
        },
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
            'abbreviated_name': (str,),  # noqa: E501
            'category': (str,),  # noqa: E501
            'conversion_steps': ([ConversionStep],),  # noqa: E501
            'maximum_value': (int,),  # noqa: E501
            'name': (str,),  # noqa: E501
            'unit_category': (UnitCategory,),  # noqa: E501
            'advanced': (int,),  # noqa: E501
            'category_id': (int,),  # noqa: E501
            'category_name': (str,),  # noqa: E501
            'id': (int,),  # noqa: E501
            'manual_tracking': (int,),  # noqa: E501
            'maximum_allowed_value': (float,),  # noqa: E501
            'minimum_allowed_value': (float,),  # noqa: E501
            'minimum_value': (int,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'abbreviated_name': 'abbreviatedName',  # noqa: E501
        'category': 'category',  # noqa: E501
        'conversion_steps': 'conversionSteps',  # noqa: E501
        'maximum_value': 'maximumValue',  # noqa: E501
        'name': 'name',  # noqa: E501
        'unit_category': 'unitCategory',  # noqa: E501
        'advanced': 'advanced',  # noqa: E501
        'category_id': 'categoryId',  # noqa: E501
        'category_name': 'categoryName',  # noqa: E501
        'id': 'id',  # noqa: E501
        'manual_tracking': 'manualTracking',  # noqa: E501
        'maximum_allowed_value': 'maximumAllowedValue',  # noqa: E501
        'minimum_allowed_value': 'minimumAllowedValue',  # noqa: E501
        'minimum_value': 'minimumValue',  # noqa: E501
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
    def __init__(self, abbreviated_name, category, conversion_steps, maximum_value, name, unit_category, *args, **kwargs):  # noqa: E501
        """Unit - a model defined in OpenAPI

        Args:
            abbreviated_name (str): Unit abbreviation
            category (str): Unit category
            conversion_steps ([ConversionStep]): Conversion steps list
            maximum_value (int): Ex: 4
            name (str): Unit name
            unit_category (UnitCategory):

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
            advanced (int): Ex: 1. [optional]  # noqa: E501
            category_id (int): Ex: 6. [optional]  # noqa: E501
            category_name (str): Ex: Miscellany. [optional]  # noqa: E501
            id (int): Ex: 29. [optional]  # noqa: E501
            manual_tracking (int): Ex: 0. [optional]  # noqa: E501
            maximum_allowed_value (float): The maximum allowed value for measurements. While you can record a value above this maximum, it will be excluded from the correlation analysis.. [optional]  # noqa: E501
            minimum_allowed_value (float): The minimum allowed value for measurements. While you can record a value below this minimum, it will be excluded from the correlation analysis.. [optional]  # noqa: E501
            minimum_value (int): Ex: 0. [optional]  # noqa: E501
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

        self.abbreviated_name = abbreviated_name
        self.category = category
        self.conversion_steps = conversion_steps
        self.maximum_value = maximum_value
        self.name = name
        self.unit_category = unit_category
        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
