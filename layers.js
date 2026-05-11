var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_batas_desa_kobar_2 = new ol.format.GeoJSON();
var features_batas_desa_kobar_2 = format_batas_desa_kobar_2.readFeatures(json_batas_desa_kobar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_desa_kobar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_desa_kobar_2.addFeatures(features_batas_desa_kobar_2);
var lyr_batas_desa_kobar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_desa_kobar_2, 
                style: style_batas_desa_kobar_2,
                popuplayertitle: 'batas_desa_kobar',
                interactive: true,
                title: '<img src="styles/legend/batas_desa_kobar_2.png" /> batas_desa_kobar'
            });
var format_DataSetGudangArselKumai_3 = new ol.format.GeoJSON();
var features_DataSetGudangArselKumai_3 = format_DataSetGudangArselKumai_3.readFeatures(json_DataSetGudangArselKumai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataSetGudangArselKumai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataSetGudangArselKumai_3.addFeatures(features_DataSetGudangArselKumai_3);
var lyr_DataSetGudangArselKumai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataSetGudangArselKumai_3, 
                style: style_DataSetGudangArselKumai_3,
                popuplayertitle: 'DataSetGudangArselKumai',
                interactive: true,
                title: '<img src="styles/legend/DataSetGudangArselKumai_3.png" /> DataSetGudangArselKumai'
            });
var format_BanjirTinggi_4 = new ol.format.GeoJSON();
var features_BanjirTinggi_4 = format_BanjirTinggi_4.readFeatures(json_BanjirTinggi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BanjirTinggi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BanjirTinggi_4.addFeatures(features_BanjirTinggi_4);
var lyr_BanjirTinggi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BanjirTinggi_4, 
                style: style_BanjirTinggi_4,
                popuplayertitle: 'Banjir Tinggi',
                interactive: true,
                title: '<img src="styles/legend/BanjirTinggi_4.png" /> Banjir Tinggi'
            });
var format_BanjirSedang_5 = new ol.format.GeoJSON();
var features_BanjirSedang_5 = format_BanjirSedang_5.readFeatures(json_BanjirSedang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BanjirSedang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BanjirSedang_5.addFeatures(features_BanjirSedang_5);
var lyr_BanjirSedang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BanjirSedang_5, 
                style: style_BanjirSedang_5,
                popuplayertitle: 'Banjir Sedang',
                interactive: true,
                title: '<img src="styles/legend/BanjirSedang_5.png" /> Banjir Sedang'
            });
var format_BanjirRendah_6 = new ol.format.GeoJSON();
var features_BanjirRendah_6 = format_BanjirRendah_6.readFeatures(json_BanjirRendah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BanjirRendah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BanjirRendah_6.addFeatures(features_BanjirRendah_6);
var lyr_BanjirRendah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BanjirRendah_6, 
                style: style_BanjirRendah_6,
                popuplayertitle: 'Banjir Rendah',
                interactive: true,
                title: '<img src="styles/legend/BanjirRendah_6.png" /> Banjir Rendah'
            });
var format_GEATinggi_7 = new ol.format.GeoJSON();
var features_GEATinggi_7 = format_GEATinggi_7.readFeatures(json_GEATinggi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEATinggi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEATinggi_7.addFeatures(features_GEATinggi_7);
var lyr_GEATinggi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEATinggi_7, 
                style: style_GEATinggi_7,
                popuplayertitle: 'GEA Tinggi',
                interactive: true,
                title: '<img src="styles/legend/GEATinggi_7.png" /> GEA Tinggi'
            });
var format_GEASedang_8 = new ol.format.GeoJSON();
var features_GEASedang_8 = format_GEASedang_8.readFeatures(json_GEASedang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEASedang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEASedang_8.addFeatures(features_GEASedang_8);
var lyr_GEASedang_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEASedang_8, 
                style: style_GEASedang_8,
                popuplayertitle: 'GEA Sedang',
                interactive: true,
                title: '<img src="styles/legend/GEASedang_8.png" /> GEA Sedang'
            });
var format_GEARendah_9 = new ol.format.GeoJSON();
var features_GEARendah_9 = format_GEARendah_9.readFeatures(json_GEARendah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEARendah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEARendah_9.addFeatures(features_GEARendah_9);
var lyr_GEARendah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEARendah_9, 
                style: style_GEARendah_9,
                popuplayertitle: 'GEA Rendah',
                interactive: true,
                title: '<img src="styles/legend/GEARendah_9.png" /> GEA Rendah'
            });
var group_batas_desa_kobar = new ol.layer.Group({
                                layers: [lyr_batas_desa_kobar_2,lyr_DataSetGudangArselKumai_3,],
                                fold: 'open',
                                title: 'batas_desa_kobar'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_batas_desa_kobar_2.setVisible(true);lyr_DataSetGudangArselKumai_3.setVisible(true);lyr_BanjirTinggi_4.setVisible(true);lyr_BanjirSedang_5.setVisible(true);lyr_BanjirRendah_6.setVisible(true);lyr_GEATinggi_7.setVisible(true);lyr_GEASedang_8.setVisible(true);lyr_GEARendah_9.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,group_batas_desa_kobar,lyr_BanjirTinggi_4,lyr_BanjirSedang_5,lyr_BanjirRendah_6,lyr_GEATinggi_7,lyr_GEASedang_8,lyr_GEARendah_9];
lyr_batas_desa_kobar_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_DataSetGudangArselKumai_3.set('fieldAliases', {'Nomor': 'Nomor', 'Nama_Kecamatan': 'Nama_Kecamatan', 'Nama_Desa': 'Nama_Desa', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Nama_Gudang': 'Nama_Gudang', 'Alamat': 'Alamat', 'Kapasitas_Ton': 'Kapasitas_Ton', 'Terisi_Ton': 'Terisi_Ton', });
lyr_BanjirTinggi_4.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'gridcode': 'gridcode', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'bahaya': 'bahaya', 'kelas': 'kelas', });
lyr_BanjirSedang_5.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'gridcode': 'gridcode', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'bahaya': 'bahaya', 'kelas': 'kelas', });
lyr_BanjirRendah_6.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'gridcode': 'gridcode', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'bahaya': 'bahaya', 'kelas': 'kelas', });
lyr_GEATinggi_7.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'gridcode': 'gridcode', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'bahaya': 'bahaya', 'kelas': 'kelas', });
lyr_GEASedang_8.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'gridcode': 'gridcode', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'bahaya': 'bahaya', 'kelas': 'kelas', });
lyr_GEARendah_9.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'gridcode': 'gridcode', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'bahaya': 'bahaya', 'kelas': 'kelas', });
lyr_batas_desa_kobar_2.set('fieldImages', {'OBJECTID': 'Range', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_DataSetGudangArselKumai_3.set('fieldImages', {'Nomor': 'Range', 'Nama_Kecamatan': 'TextEdit', 'Nama_Desa': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Nama_Gudang': 'TextEdit', 'Alamat': 'TextEdit', 'Kapasitas_Ton': 'Range', 'Terisi_Ton': 'Range', });
lyr_BanjirTinggi_4.set('fieldImages', {'objectid': 'Range', 'id': 'Range', 'gridcode': 'Range', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'bahaya': 'TextEdit', 'kelas': 'TextEdit', });
lyr_BanjirSedang_5.set('fieldImages', {'objectid': 'Range', 'id': 'Range', 'gridcode': 'Range', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'bahaya': 'TextEdit', 'kelas': 'TextEdit', });
lyr_BanjirRendah_6.set('fieldImages', {'objectid': 'Range', 'id': 'Range', 'gridcode': 'Range', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'bahaya': 'TextEdit', 'kelas': 'TextEdit', });
lyr_GEATinggi_7.set('fieldImages', {'objectid': 'Range', 'id': 'Range', 'gridcode': 'Range', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'bahaya': 'TextEdit', 'kelas': 'TextEdit', });
lyr_GEASedang_8.set('fieldImages', {'objectid': 'Range', 'id': 'Range', 'gridcode': 'Range', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'bahaya': 'TextEdit', 'kelas': 'TextEdit', });
lyr_GEARendah_9.set('fieldImages', {'objectid': 'Range', 'id': 'Range', 'gridcode': 'Range', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'bahaya': 'TextEdit', 'kelas': 'TextEdit', });
lyr_batas_desa_kobar_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_DataSetGudangArselKumai_3.set('fieldLabels', {'Nomor': 'no label', 'Nama_Kecamatan': 'no label', 'Nama_Desa': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Nama_Gudang': 'no label', 'Alamat': 'no label', 'Kapasitas_Ton': 'no label', 'Terisi_Ton': 'no label', });
lyr_BanjirTinggi_4.set('fieldLabels', {'objectid': 'no label', 'id': 'no label', 'gridcode': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'bahaya': 'no label', 'kelas': 'no label', });
lyr_BanjirSedang_5.set('fieldLabels', {'objectid': 'no label', 'id': 'no label', 'gridcode': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'bahaya': 'no label', 'kelas': 'no label', });
lyr_BanjirRendah_6.set('fieldLabels', {'objectid': 'no label', 'id': 'no label', 'gridcode': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'bahaya': 'no label', 'kelas': 'no label', });
lyr_GEATinggi_7.set('fieldLabels', {'objectid': 'no label', 'id': 'no label', 'gridcode': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'bahaya': 'no label', 'kelas': 'no label', });
lyr_GEASedang_8.set('fieldLabels', {'objectid': 'no label', 'id': 'no label', 'gridcode': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'bahaya': 'no label', 'kelas': 'no label', });
lyr_GEARendah_9.set('fieldLabels', {'objectid': 'no label', 'id': 'no label', 'gridcode': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'bahaya': 'no label', 'kelas': 'no label', });
lyr_GEARendah_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});