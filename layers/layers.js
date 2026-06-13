var qgis2webFloodLayers = [
  {
    "id": "KB01_Grid_Data",
    "name": "KB01 - Grid Data",
    "type": "flood-animation",
    "frames": 1,
    "extent3857": [
      11945609.673383405,
      1844372.186383094,
      12003387.847203607,
      1885606.501322023
    ]
  },
  {
    "id": "KB02_Grid_Data",
    "name": "KB02 - Grid Data",
    "type": "flood-animation",
    "frames": 1,
    "extent3857": [
      11945609.673383405,
      1844372.186383094,
      12003387.847203607,
      1885606.501322023
    ]
  },
  {
    "id": "base_Mặt_cắt_khảo_sát",
    "name": "Mặt cắt khảo sát",
    "type": "vector",
    "group": "Nền",
    "visible": true,
    "popup": true,
    "url": "layers/MatCat_Line.geojson",
    "extent3857": [
      11958109.0071399,
      1857975.5626414088,
      11975196.166993627,
      1870990.6621971563
    ]
  },
  {
    "id": "base_Vi_Tri_diem_48N",
    "name": "Vi_Tri_diem_48N",
    "type": "vector",
    "group": "Nền",
    "visible": true,
    "popup": true,
    "url": "layers/Vi_Tri_diem_48N.geojson",
    "extent3857": [
      11894829.952382118,
      1816697.9410503525,
      12021243.297339056,
      1872604.1501809221
    ]
  },
  {
    "id": "base_Duong_giao_Thong_48N",
    "name": "Duong_giao_Thong_48N",
    "type": "vector",
    "group": "Nền",
    "visible": true,
    "popup": true,
    "url": "layers/Duong_giao_Thong_48N.geojson",
    "extent3857": [
      11913841.248657383,
      1806085.0573775617,
      12039352.43823061,
      1891052.959211323
    ]
  },
  {
    "id": "base_Ranh_giới_tỉnh",
    "name": "Ranh giới tỉnh",
    "type": "vector",
    "group": "Nền",
    "visible": true,
    "popup": true,
    "url": "layers/Tinh_48.zip",
    "extent3857": [
      11370608.494102875,
      773451.0042106276,
      13068156.996284423,
      2679571.7359035327
    ]
  },
  {
    "id": "base_KB05_DEM_VTLVN",
    "name": "KB05_DEM_VTLVN",
    "type": "raster",
    "group": "KB05",
    "visible": true,
    "popup": false,
    "url": "data/KB05_DEM_VTLVN_qgis_style.png",
    "extent3857": [
      11945609.673383405,
      1844385.573741891,
      12003398.85315726,
      1885606.501322023
    ]
  },
  {
    "id": "base_demtrong1",
    "name": "demtrong1",
    "type": "raster",
    "group": "",
    "visible": false,
    "popup": false,
    "url": "data/flood_classes_qgis_style.png",
    "extent3857": [
      11188902.73953565,
      1.0040328310915763,
      11188932.658890724,
      31.12502930238206
    ]
  }
];
var layersList = ["KB01 - Grid Data", "KB02 - Grid Data", "Mặt cắt khảo sát", "Vi_Tri_diem_48N", "Duong_giao_Thong_48N", "Ranh giới tỉnh", "KB05_DEM_VTLVN", "demtrong1"];
var qgis2webFloodGroups = {
  "flood": "Độ sâu ngập lụt",
  "base": "Lớp nền"
};
