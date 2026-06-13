Cấu trúc WebGIS kiểu qgis2web + Flood:
- index.html, app.js, config.js: runtime Flood animation/timeseries/popup.
- layers/: dữ liệu vector nền và layers.js manifest kiểu qgis2web.
- styles/: style/legend symbol export từ QGIS.
- data/: raster nền dạng frame PNG và data/frames cho animation ngập.
- resources/, images/: thư mục tài nguyên tương tự qgis2web.
Chạy run_local_server.bat hoặc python -m http.server 8080 để xem. Không mở trực tiếp index.html bằng file:// vì browser có thể chặn fetch GeoJSON/SHP.
