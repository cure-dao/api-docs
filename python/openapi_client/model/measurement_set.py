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
    from openapi_client.model.measurement_item import MeasurementItem
    globals()['MeasurementItem'] = MeasurementItem


class MeasurementSet(ModelNormal):
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
        ('combination_operation',): {
            'MEAN': "MEAN",
            'SUM': "SUM",
        },
        ('variable_category_name',): {
            'ACTIVITY': "Activity",
            'BOOKS': "Books",
            'CAUSES_OF_ILLNESS': "Causes of Illness",
            'COGNITIVE_PERFORMANCE': "Cognitive Performance",
            'CONDITIONS': "Conditions",
            'EMOTIONS': "Emotions",
            'ENVIRONMENT': "Environment",
            'FOODS': "Foods",
            'GOALS': "Goals",
            'LOCATIONS': "Locations",
            'MISCELLANEOUS': "Miscellaneous",
            'MOVIES_AND_TV': "Movies and TV",
            'MUSIC': "Music",
            'NUTRIENTS': "Nutrients",
            'PAYMENTS': "Payments",
            'PHYSICAL_ACTIVITIES': "Physical Activities",
            'PHYSIQUE': "Physique",
            'SLEEP': "Sleep",
            'SOCIAL_INTERACTIONS': "Social Interactions",
            'SOFTWARE': "Software",
            'SYMPTOMS': "Symptoms",
            'TREATMENTS': "Treatments",
            'VITAL_SIGNS': "Vital Signs",
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
            'measurement_items': ([MeasurementItem],),  # noqa: E501
            'source_name': (str,),  # noqa: E501
            'unit_abbreviated_name': (str,),  # noqa: E501
            'variable_name': (str,),  # noqa: E501
            'combination_operation': (str,),  # noqa: E501
            'variable_category_name': (str,),  # noqa: E501
            'upc': (str,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'measurement_items': 'measurementItems',  # noqa: E501
        'source_name': 'sourceName',  # noqa: E501
        'unit_abbreviated_name': 'unitAbbreviatedName',  # noqa: E501
        'variable_name': 'variableName',  # noqa: E501
        'combination_operation': 'combinationOperation',  # noqa: E501
        'variable_category_name': 'variableCategoryName',  # noqa: E501
        'upc': 'upc',  # noqa: E501
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
    def __init__(self, measurement_items, source_name, unit_abbreviated_name, variable_name, *args, **kwargs):  # noqa: E501
        """MeasurementSet - a model defined in OpenAPI

        Args:
            measurement_items ([MeasurementItem]): Array of timestamps, values, and optional notes
            source_name (str): Name of the application or device used to record the measurement values
            unit_abbreviated_name (str): Unit of measurement
            variable_name (str): ORIGINAL name of the variable for which we are creating the measurement records

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
            combination_operation (str): Way to aggregate measurements over time. SUM should be used for things like minutes of exercise.  If you use MEAN for exercise, then a person might exercise more minutes in one day but add separate measurements that were smaller.  So when we are doing correlational analysis, we would think that the person exercised less that day even though they exercised more.  Conversely, we must use MEAN for things such as ratings which cannot be SUMMED.. [optional]  # noqa: E501
            variable_category_name (str): Ex: Emotions, Treatments, Symptoms.... [optional]  # noqa: E501
            upc (str): UPC or other barcode scan result. [optional]  # noqa: E501
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

        self.measurement_items = measurement_items
        self.source_name = source_name
        self.unit_abbreviated_name = unit_abbreviated_name
        self.variable_name = variable_name
        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
