x= {
  "type" : "record",
  "name" : "PackageSearchPackageInfoList",
  "namespace" : "com.expedia.packages.simple.v2",
  "fields" : [ {
    "name" : "MessageInfo",
    "type" : [ "null", {
      "type" : "record",
      "name" : "MessageInfo",
      "namespace" : "com.expedia.packages.simple",
      "fields" : [ {
        "name" : "MessageGuid",
        "type" : [ "string", "null" ]
      }, {
        "name" : "TransactionGuid",
        "type" : [ "string", "null" ]
      }, {
        "name" : "SiteMessageInfoGuid",
        "type" : [ "string", "null" ]
      }, {
        "name" : "TPID",
        "type" : [ "long", "null" ]
      }, {
        "name" : "EAPID",
        "type" : [ "long", "null" ]
      }, {
        "name" : "TUID",
        "type" : [ "long", "null" ]
      }, {
        "name" : "ClientId",
        "type" : [ "int", "null" ]
      }, {
        "name" : "MessageCreateTimestampUTC",
        "type" : [ "long", "null" ]
      }, {
        "name" : "ActivityIdGuid",
        "type" : [ "null", "string" ],
        "default" : null
      }, {
        "name" : "ClientName",
        "type" : [ "null", "string" ],
        "default" : null
      }, {
        "name" : "ReferrerClientNameList",
        "type" : [ "null", {
          "type" : "array",
          "items" : "string"
        } ],
        "default" : null
      } ]
    } ]
  }, {
    "name" : "PackagePiidPrefix",
    "type" : [ "string", "null" ]
  }, {
    "name" : "TravelerCount",
    "type" : [ "null", "int" ]
  }, {
    "name" : "DPFSInboundDepartureTime",
    "type" : [ "null", "string" ]
  }, {
    "name" : "DPFSOutboundDepartureTime",
    "type" : [ "null", "string" ]
  }, {
    "name" : "InboundDPFSStopsCode",
    "type" : [ "null", "string" ]
  }, {
    "name" : "OutboundDPFSStopsCode",
    "type" : [ "null", "string" ]
  }, {
    "name" : "PackageInfoList",
    "type" : [ "null", {
      "type" : "array",
      "items" : {
        "type" : "record",
        "name" : "PackageInfo",
        "fields" : [ {
          "name" : "AirInfoHash",
          "type" : [ "null", "int" ]
        }, {
          "name" : "AirInfo",
          "type" : [ "null", {
            "type" : "record",
            "name" : "AirInfo",
            "namespace" : "com.expedia.packages.simple",
            "fields" : [ {
              "name" : "TicketingAirCarrierCode",
              "type" : [ "null", "string" ],
              "default" : null
            }, {
              "name" : "FareType",
              "type" : [ "null", "string" ],
              "default" : null
            }, {
              "name" : "AirOriginDestinationList",
              "type" : {
                "type" : "array",
                "items" : {
                  "type" : "record",
                  "name" : "AirOriginDestination",
                  "fields" : [ {
                    "name" : "FareClass",
                    "type" : [ "null", "string" ],
                    "default" : null
                  }, {
                    "name" : "ToAirportCode",
                    "type" : [ "null", "string" ],
                    "default" : null
                  }, {
                    "name" : "AirSegmentList",
                    "type" : [ "null", {
                      "type" : "array",
                      "items" : {
                        "type" : "record",
                        "name" : "AirSegment",
                        "fields" : [ {
                          "name" : "FlightNum",
                          "type" : [ "null", "string" ],
                          "default" : null
                        }, {
                          "name" : "ToAirportCode",
                          "type" : [ "null", "string" ],
                          "default" : null
                        }, {
                          "name" : "FromAirportCode",
                          "type" : [ "null", "string" ],
                          "default" : null
                        }, {
                          "name" : "SegmentStopCount",
                          "type" : [ "null", "long" ],
                          "default" : null
                        }, {
                          "name" : "CarrierCode",
                          "type" : [ "null", "string" ],
                          "default" : null
                        }, {
                          "name" : "AccumulatedDuration",
                          "type" : [ "null", "string" ],
                          "default" : null
                        }, {
                          "name" : "StartDateTime",
                          "type" : [ "null", "string" ],
                          "default" : null
                        }, {
                          "name" : "EndDateTime",
                          "type" : [ "null", "string" ],
                          "default" : null
                        } ],
                        "default" : null
                      }
                    } ],
                    "default" : null
                  } ]
                }
              }
            } ]
          } ]
        }, {
          "name" : "FlightSelectionAttributeList",
          "type" : [ "null", {
            "type" : "array",
            "items" : "string"
          } ]
        }, {
          "name" : "TransactionInfo",
          "type" : [ "null", {
            "type" : "record",
            "name" : "TransactionInfo",
            "namespace" : "com.expedia.packages.simple",
            "fields" : [ {
              "name" : "UnitMeasureMap",
              "type" : {
                "type" : "map",
                "values" : {
                  "type" : "record",
                  "name" : "UnitMeasure",
                  "fields" : [ {
                    "name" : "CategoryCodeMap",
                    "type" : {
                      "type" : "map",
                      "values" : {
                        "type" : "record",
                        "name" : "TransactionUnit",
                        "fields" : [ {
                          "name" : "Amount",
                          "type" : [ "string", "null" ]
                        }, {
                          "name" : "CurrencyCode",
                          "type" : [ "string", "null" ]
                        }, {
                          "name" : "UnitCount",
                          "type" : [ "long", "null" ]
                        } ]
                      }
                    }
                  } ]
                }
              }
            } ]
          } ]
        }, {
          "name" : "LodgingInfo",
          "type" : [ "null", {
            "type" : "record",
            "name" : "LodgingInfo",
            "namespace" : "com.expedia.packages.simple",
            "fields" : [ {
              "name" : "LodgingProduct",
              "type" : [ "null", {
                "type" : "record",
                "name" : "LodgingProduct",
                "fields" : [ {
                  "name" : "HotelId",
                  "type" : [ "null", "int" ]
                }, {
                  "name" : "RoomTypeCode",
                  "type" : [ "null", "int" ]
                }, {
                  "name" : "RatePlanCode",
                  "type" : [ "null", "int" ]
                }, {
                  "name" : "CheckInDate",
                  "type" : [ "null", "string" ]
                }, {
                  "name" : "CheckOutDate",
                  "type" : [ "null", "string" ]
                }, {
                  "name" : "LengthOfStayDays",
                  "type" : [ "null", "int" ]
                }, {
                  "name" : "StarRating",
                  "type" : [ "null", "string" ],
                  "default" : null
                }, {
                  "name" : "DRRid",
                  "type" : [ "null", "long" ],
                  "default" : null
                }, {
                  "name" : "RoomCount",
                  "type" : [ "null", "int" ],
                  "default" : null
                } ]
              } ]
            }, {
              "name" : "LodgingProductHash",
              "type" : [ "null", "int" ]
            }, {
              "name" : "AvailabilityStatus",
              "type" : [ "null", "string" ]
            }, {
              "name" : "AdvancePurchaseWindowDays",
              "type" : [ "null", "int" ]
            } ]
          } ]
        }, {
          "name" : "BrandedDealIdentifier",
          "type" : [ "null", "string" ]
        }, {
          "name" : "BrandedDealMarker",
          "type" : [ "null", {
            "type" : "array",
            "items" : "string"
          } ]
        }, {
          "name" : "SameDayFlight",
          "type" : [ "null", "boolean" ],
          "default" : null
        } ]
      }
    } ]
  }, {
    "name" : "ExperimentInfoList",
    "type" : [ "null", {
      "type" : "array",
      "items" : {
        "type" : "record",
        "name" : "ExperimentTreatment",
        "fields" : [ {
          "name" : "ExperimentId",
          "type" : [ "null", "int" ],
          "default" : null
        }, {
          "name" : "TreatmentGroupId",
          "type" : [ "null", "int" ],
          "default" : null
        } ],
        "default" : null
      }
    } ]
  } ]
}
function writeFields(fields, level)
{
    level=level+1;
    for(var i=0;i<fields.length;i++)
    {
      var currentfield = fields[i];
      console.log(level + currentfield.name);
      if( Object.prototype.toString.call( currentfield.type ) === '[object Array]' ) {
          for(var j=0;j<currentfield.type.length;j++)
          {
            var currentType =  currentfield.type[j];
            if(currentType !="null" && currentType.fields)
            {
              writeFields(currentType.fields,level)
            }
            if(currentType !="null" && currentType.items && currentType.items.fields){
              writeFields(currentType.items.fields,level);
            }
          }
      } 
      else if (typeof(currentfield.type) == "object" && currentfield.type.items && currentfield.type.items.fields) {
        writeFields(currentfield.type.items.fields,level);
      }

      
    }
}

writeFields(x.fields,0);
