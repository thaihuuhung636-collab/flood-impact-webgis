window.DFS2_WEBGIS_CONFIG = {
  "title": "Flood Impact WebGIS",
  "defaultBasemap": "street",
  "defaultAlpha": 0.7,
  "layers": [
    {
      "id": "KB01_Grid_Data",
      "alias": "KB01",
      "caption": "KB01 - Grid Data",
      "item": "Grid Data",
      "frames": [
        {
          "png": "data/frames/KB01_Grid_Data/frame_0000.png",
          "tif": "data/frames/KB01_Grid_Data/frame_0000.tif",
          "time": "2000-01-01 00:00:00"
        }
      ],
      "extent3857": [
        11945609.673383405,
        1844372.186383094,
        12003387.847203607,
        1885606.501322023
      ],
      "legendItems": [
        {
          "color": "#440154",
          "label": "0.0002 - 0.655"
        },
        {
          "color": "#46317e",
          "label": "0.655 - 1.31"
        },
        {
          "color": "#365b8c",
          "label": "1.31 - 1.97"
        },
        {
          "color": "#277e8e",
          "label": "1.97 - 2.62"
        },
        {
          "color": "#1fa187",
          "label": "2.62 - 3.28"
        },
        {
          "color": "#49c16d",
          "label": "3.28 - 3.93"
        },
        {
          "color": "#9fd938",
          "label": "3.93 - 4.59"
        },
        {
          "color": "#fde724",
          "label": "4.59 - 5.24"
        }
      ]
    },
    {
      "id": "KB02_Grid_Data",
      "alias": "KB02",
      "caption": "KB02 - Grid Data",
      "item": "Grid Data",
      "frames": [
        {
          "png": "data/frames/KB02_Grid_Data/frame_0000.png",
          "tif": "data/frames/KB02_Grid_Data/frame_0000.tif",
          "time": "2000-01-01 00:00:00"
        }
      ],
      "extent3857": [
        11945609.673383405,
        1844372.186383094,
        12003387.847203607,
        1885606.501322023
      ],
      "legendItems": [
        {
          "color": "#440154",
          "label": "0.0001 - 0.89"
        },
        {
          "color": "#46317e",
          "label": "0.89 - 1.78"
        },
        {
          "color": "#365b8c",
          "label": "1.78 - 2.67"
        },
        {
          "color": "#277e8e",
          "label": "2.67 - 3.56"
        },
        {
          "color": "#1fa187",
          "label": "3.56 - 4.45"
        },
        {
          "color": "#49c16d",
          "label": "4.45 - 5.34"
        },
        {
          "color": "#9fd938",
          "label": "5.34 - 6.23"
        },
        {
          "color": "#fde724",
          "label": "6.23 - 7.12"
        }
      ]
    }
  ],
  "baseLayers": [
    {
      "id": "base_Mặt_cắt_khảo_sát",
      "name": "Mặt cắt khảo sát",
      "type": "vector",
      "url": "layers/MatCat_Line.geojson",
      "extent3857": [
        11958109.0071399,
        1857975.5626414088,
        11975196.166993627,
        1870990.6621971563
      ],
      "format": "geojson",
      "group": "Nền",
      "style": {
        "type": "single",
        "style": {
          "strokeColor": "#000000",
          "fillColor": "#000000",
          "strokeWidth": 2.8346,
          "radius": 5,
          "iconUrl": "styles/legend/base_Mặt_cắt_khảo_sát_style_001.png",
          "iconScale": 1.0,
          "iconSize": [
            32,
            32
          ],
          "lineCap": "butt",
          "strokeDash": [
            15.0,
            6.0
          ]
        }
      },
      "legendItems": [
        {
          "label": "Mặt cắt khảo sát",
          "color": "#000000",
          "fillColor": "#000000",
          "symbolType": "line",
          "strokeColor": "#000000",
          "strokeWidth": 2.8346,
          "strokeDash": [
            15.0,
            6.0
          ],
          "iconUrl": "styles/legend/base_Mặt_cắt_khảo_sát_legend_001.png"
        }
      ],
      "visible": true,
      "popup": true,
      "popupFields": [
        "Id",
        "ChieuDai",
        "Ten"
      ],
      "popupFieldLabels": {
        "Id": "no label",
        "ChieuDai": "no label",
        "Ten": "no label"
      }
    },
    {
      "id": "base_Vi_Tri_diem_48N",
      "name": "Vi_Tri_diem_48N",
      "type": "vector",
      "url": "layers/Vi_Tri_diem_48N.geojson",
      "extent3857": [
        11894829.952382118,
        1816697.9410503525,
        12021243.297339056,
        1872604.1501809221
      ],
      "format": "geojson",
      "group": "Nền",
      "style": {
        "type": "categorized",
        "field": "Layer",
        "categories": [
          {
            "value": "Bệnh viện",
            "label": "Bệnh viện",
            "style": {
              "strokeColor": "#e31a1c",
              "fillColor": "#e31a1c",
              "strokeWidth": 0.56692,
              "radius": 2.95384,
              "iconUrl": "styles/legend/base_Vi_Tri_diem_48N_style_001.png",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "color": "#ffffff",
              "lineCap": "butt"
            }
          },
          {
            "value": "Trụ sở hành chính",
            "label": "Trụ sở hành chính",
            "style": {
              "strokeColor": "#000000",
              "fillColor": "#000000",
              "strokeWidth": 1.13384,
              "radius": 2,
              "iconUrl": "styles/legend/base_Vi_Tri_diem_48N_style_002.png",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "color": "#ffffff",
              "lineCap": "butt"
            }
          }
        ],
        "defaultStyle": {
          "strokeColor": "#232323",
          "fillColor": "#c43c39",
          "strokeWidth": 0.35,
          "radius": 3.2,
          "iconUrl": "styles/legend/base_Vi_Tri_diem_48N_style_003.png",
          "iconScale": 1.0,
          "iconSize": [
            32,
            32
          ],
          "color": "#c43c39",
          "lineCap": "butt"
        }
      },
      "legendItems": [
        {
          "label": "Bệnh viện",
          "color": "#e31a1c",
          "fillColor": "#e31a1c",
          "iconUrl": "styles/legend/base_Vi_Tri_diem_48N_legend_001.png",
          "symbolType": "icon"
        },
        {
          "label": "Trụ sở hành chính",
          "color": "#000000",
          "fillColor": "#000000",
          "iconUrl": "styles/legend/base_Vi_Tri_diem_48N_legend_002.png",
          "symbolType": "icon"
        }
      ],
      "visible": true,
      "popup": true,
      "popupFields": [
        "OBJECTID",
        "Entity",
        "Layer",
        "Color",
        "Linetype",
        "Elevation",
        "LineWt",
        "RefName",
        "Angle"
      ],
      "popupFieldLabels": {
        "OBJECTID": "no label",
        "Entity": "no label",
        "Layer": "no label",
        "Color": "no label",
        "Linetype": "no label",
        "Elevation": "no label",
        "LineWt": "no label",
        "RefName": "no label",
        "Angle": "no label"
      }
    },
    {
      "id": "base_Duong_giao_Thong_48N",
      "name": "Duong_giao_Thong_48N",
      "type": "vector",
      "url": "layers/Duong_giao_Thong_48N.geojson",
      "extent3857": [
        11913841.248657383,
        1806085.0573775617,
        12039352.43823061,
        1891052.959211323
      ],
      "format": "geojson",
      "group": "Nền",
      "style": {
        "type": "categorized",
        "field": "Layer",
        "categories": [
          {
            "value": "Đường Quốc Lộ",
            "label": "Đường Quốc Lộ",
            "style": {
              "strokeColor": "#000000",
              "fillColor": "#000000",
              "strokeWidth": 2.8346,
              "radius": 5,
              "iconUrl": "styles/legend/base_Duong_giao_Thong_48N_style_001.png",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "lineCap": "butt",
              "strokeDash": [
                15.0,
                6.0
              ]
            }
          },
          {
            "value": "Đường sắt",
            "label": "Đường sắt",
            "style": {
              "strokeColor": "#000000",
              "fillColor": "#000000",
              "strokeWidth": 6.80304,
              "radius": 5,
              "iconUrl": "styles/legend/base_Duong_giao_Thong_48N_style_002.png",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "lineCap": "square",
              "lineJoin": "miter",
              "strokeDash": [
                15.0,
                6.0
              ],
              "lineLayers": [
                {
                  "strokeColor": "#000000",
                  "fillColor": "#000000",
                  "strokeWidth": 1.13384,
                  "lineCap": "square",
                  "lineJoin": "miter",
                  "strokeDash": [
                    15.0,
                    6.0
                  ]
                },
                {
                  "strokeColor": "#000000",
                  "fillColor": "#000000",
                  "strokeWidth": 6.80304
                }
              ]
            }
          },
          {
            "value": "Đường Tỉnh Lộ",
            "label": "Đường Tỉnh Lộ",
            "style": {
              "strokeColor": "#000000",
              "fillColor": "#000000",
              "strokeWidth": 1.4173,
              "radius": 5,
              "iconUrl": "styles/legend/base_Duong_giao_Thong_48N_style_003.png",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "lineCap": "butt",
              "strokeDash": [
                15.0,
                6.0
              ]
            }
          },
          {
            "value": "None",
            "label": "None",
            "style": {
              "strokeColor": "#000000",
              "fillColor": "#000000",
              "strokeWidth": 0.736996,
              "radius": 5,
              "iconUrl": "styles/legend/base_Duong_giao_Thong_48N_style_004.png",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "lineCap": "butt",
              "strokeDash": [
                15.0,
                6.0
              ]
            }
          }
        ],
        "defaultStyle": {
          "strokeColor": "#000000",
          "fillColor": "#000000",
          "strokeWidth": 0.736996,
          "radius": 5,
          "iconUrl": "styles/legend/base_Duong_giao_Thong_48N_style_005.png",
          "iconScale": 1.0,
          "iconSize": [
            32,
            32
          ],
          "lineCap": "butt",
          "strokeDash": [
            15.0,
            6.0
          ]
        }
      },
      "legendItems": [
        {
          "label": "Đường Quốc Lộ",
          "color": "#000000",
          "fillColor": "#000000",
          "symbolType": "line",
          "strokeColor": "#000000",
          "strokeWidth": 2.8346,
          "strokeDash": [
            15.0,
            6.0
          ],
          "iconUrl": "styles/legend/base_Duong_giao_Thong_48N_legend_001.png"
        },
        {
          "label": "Đường sắt",
          "color": "#000000",
          "fillColor": "#000000",
          "symbolType": "line",
          "strokeColor": "#000000",
          "strokeWidth": 6.80304,
          "strokeDash": [
            15.0,
            6.0
          ],
          "iconUrl": "styles/legend/base_Duong_giao_Thong_48N_legend_002.png"
        },
        {
          "label": "Đường Tỉnh Lộ",
          "color": "#000000",
          "fillColor": "#000000",
          "symbolType": "line",
          "strokeColor": "#000000",
          "strokeWidth": 1.4173,
          "strokeDash": [
            15.0,
            6.0
          ],
          "iconUrl": "styles/legend/base_Duong_giao_Thong_48N_legend_003.png"
        },
        {
          "label": "None",
          "color": "#000000",
          "fillColor": "#000000",
          "symbolType": "line",
          "strokeColor": "#000000",
          "strokeWidth": 0.736996,
          "strokeDash": [
            15.0,
            6.0
          ],
          "iconUrl": "styles/legend/base_Duong_giao_Thong_48N_legend_004.png"
        }
      ],
      "visible": true,
      "popup": true,
      "popupFields": [
        "OBJECTID",
        "Entity",
        "Layer",
        "Color",
        "Linetype",
        "Elevation",
        "LineWt",
        "RefName",
        "TEN",
        "Shape_Leng"
      ],
      "popupFieldLabels": {
        "OBJECTID": "no label",
        "Entity": "no label",
        "Layer": "no label",
        "Color": "no label",
        "Linetype": "no label",
        "Elevation": "no label",
        "LineWt": "no label",
        "RefName": "no label",
        "TEN": "no label",
        "Shape_Leng": "no label"
      }
    },
    {
      "id": "base_Ranh_giới_tỉnh",
      "name": "Ranh giới tỉnh",
      "type": "vector",
      "url": "layers/Tinh_48.zip",
      "extent3857": [
        11370608.494102875,
        773451.0042106276,
        13068156.996284423,
        2679571.7359035327
      ],
      "format": "shpzip",
      "group": "Nền",
      "style": {
        "type": "single",
        "style": {
          "strokeColor": "#000000",
          "fillColor": "#000000",
          "strokeWidth": 2.8346,
          "radius": 5,
          "iconUrl": "styles/legend/base_Ranh_giới_tỉnh_style_001.png",
          "iconScale": 1.0,
          "iconSize": [
            32,
            32
          ],
          "lineCap": "butt",
          "strokeDash": [
            15.0,
            6.0
          ]
        }
      },
      "legendItems": [
        {
          "label": "Ranh giới tỉnh",
          "color": "#000000",
          "fillColor": "#000000",
          "iconUrl": "styles/legend/base_Ranh_giới_tỉnh_legend_001.png",
          "symbolType": "icon"
        }
      ],
      "visible": true,
      "popup": true,
      "popupFields": [
        "ma_tinh",
        "ten_tinh",
        "sap_nhap",
        "quy_mo",
        "tru_so",
        "loai",
        "cap",
        "stt",
        "dtich_km2",
        "dan_so",
        "matdo_km2"
      ],
      "popupFieldLabels": {
        "ma_tinh": "no label",
        "ten_tinh": "no label",
        "sap_nhap": "no label",
        "quy_mo": "no label",
        "tru_so": "no label",
        "loai": "no label",
        "cap": "no label",
        "stt": "no label",
        "dtich_km2": "no label",
        "dan_so": "no label",
        "matdo_km2": "no label"
      }
    },
    {
      "id": "base_KB05_DEM_VTLVN",
      "name": "KB05_DEM_VTLVN",
      "type": "raster",
      "url": "data/KB05_DEM_VTLVN_qgis_style.png",
      "extent3857": [
        11945609.673383405,
        1844385.573741891,
        12003398.85315726,
        1885606.501322023
      ],
      "format": "raster_frame",
      "group": "KB05",
      "legendItems": [
        {
          "label": "<= 0.5",
          "color": "#e3f2fd",
          "symbolType": "raster"
        },
        {
          "label": "0.5 - 1.0",
          "color": "#82c2f6",
          "symbolType": "raster"
        },
        {
          "label": "1.0 - 2.0",
          "color": "#3798eb",
          "symbolType": "raster"
        },
        {
          "label": "2.0 - 5.0",
          "color": "#2083de",
          "symbolType": "raster"
        },
        {
          "label": "5.0 - 7.0",
          "color": "#176cc7",
          "symbolType": "raster"
        },
        {
          "label": "7.0 - 10.0",
          "color": "#1157b1",
          "symbolType": "raster"
        },
        {
          "label": "> 10.0",
          "color": "#0d47a1",
          "symbolType": "raster"
        }
      ],
      "visible": true,
      "popup": false,
      "qgisRasterStyle": true
    },
    {
      "id": "base_demtrong1",
      "name": "demtrong1",
      "type": "raster",
      "url": "data/flood_classes_qgis_style.png",
      "extent3857": [
        11188902.73953565,
        1.0040328310915763,
        11188932.658890724,
        31.12502930238206
      ],
      "format": "raster_frame",
      "legendItems": [
        {
          "label": "<= 0.5",
          "color": "#e3f2fd",
          "symbolType": "raster"
        },
        {
          "label": "0.5 - 1.0",
          "color": "#82c2f6",
          "symbolType": "raster"
        },
        {
          "label": "1.0 - 2.0",
          "color": "#3798eb",
          "symbolType": "raster"
        },
        {
          "label": "2.0 - 5.0",
          "color": "#2083de",
          "symbolType": "raster"
        },
        {
          "label": "5.0 - 7.0",
          "color": "#176cc7",
          "symbolType": "raster"
        },
        {
          "label": "7.0 - 10.0",
          "color": "#1157b1",
          "symbolType": "raster"
        },
        {
          "label": "> 10.0",
          "color": "#0d47a1",
          "symbolType": "raster"
        }
      ],
      "visible": false,
      "popup": false,
      "qgisRasterStyle": true
    }
  ],
  "fullExtent3857": [
    11188902.73953565,
    1.0040328310915763,
    13068156.996284423,
    2679571.7359035327
  ],
  "groups": {
    "flood": "Độ sâu ngập lụt",
    "base": "Lớp nền"
  },
  "sourceCrs": "EPSG:32648",
  "webCrs": "EPSG:3857",
  "backgroundDiagnostics": [
    {
      "source": "D:\\PROJECT\\Flood_HoHuongDien\\HuongDien_Final\\SHP_DATA\\MatCat_Line.shp",
      "sourceCrs": "EPSG:32648",
      "targetCrs": "EPSG:3857",
      "extent3857": [
        11958109.0071399,
        1857975.5626414088,
        11975196.166993627,
        1870990.6621971563
      ],
      "mode": "geojson",
      "geojsonSizeMB": 0.01,
      "qgisStyle": true,
      "qgisRenderer": "singleSymbol"
    },
    {
      "source": "D:\\PROJECT\\Flood_HoHuongDien\\Data\\Vi_Tri_diem_48N.shp",
      "sourceCrs": "EPSG:32648",
      "targetCrs": "EPSG:3857",
      "extent3857": [
        11894829.952382118,
        1816697.9410503525,
        12021243.297339056,
        1872604.1501809221
      ],
      "mode": "geojson",
      "geojsonSizeMB": 0.01,
      "qgisStyle": true,
      "qgisRenderer": "categorizedSymbol"
    },
    {
      "source": "D:\\PROJECT\\Flood_HoHuongDien\\Data\\Duong_giao_Thong_48N.shp",
      "sourceCrs": "EPSG:32648",
      "targetCrs": "EPSG:3857",
      "extent3857": [
        11913841.248657383,
        1806085.0573775617,
        12039352.43823061,
        1891052.959211323
      ],
      "mode": "geojson",
      "geojsonSizeMB": 0.42,
      "qgisStyle": true,
      "qgisRenderer": "categorizedSymbol"
    },
    {
      "source": "D:\\PROJECT\\Flood_HoHuongDien\\Data\\Tinh_48.shp",
      "sourceCrs": "EPSG:32648",
      "targetCrs": "EPSG:3857",
      "geojsonTooLargeMB": 63.5,
      "mode": "shp_zip_3857",
      "extent3857": [
        11370608.494102875,
        773451.0042106276,
        13068156.996284423,
        2679571.7359035327
      ],
      "zipSizeBytes": 15251659,
      "qgisStyle": true,
      "qgisRenderer": "singleSymbol"
    },
    {
      "source": "D:\\PROJECT\\Flood_HoHuongDien\\HuongDien_Final\\Raster_Ngap_9KB\\KB05_DEM_VTLVN.tif",
      "sourceCrs": "EPSG:32648",
      "targetCrs": "EPSG:3857",
      "extent3857": [
        11945609.673383405,
        1844385.573741891,
        12003398.85315726,
        1885606.501322023
      ],
      "mode": "raster_frame_qgis_png",
      "displayUrl": "data/KB05_DEM_VTLVN_qgis_style.png"
    },
    {
      "source": "D:\\PROJECT\\Flood_HoHuongDien\\Data\\demtrong1.tif",
      "sourceCrs": "EPSG:32648",
      "targetCrs": "EPSG:3857",
      "extent3857": [
        11188902.73953565,
        1.0040328310915763,
        11188932.658890724,
        31.12502930238206
      ],
      "mode": "raster_frame_qgis_png",
      "displayUrl": "data/flood_classes_qgis_style.png"
    }
  ]
};