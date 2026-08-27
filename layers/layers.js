var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AbidjanLocationScores_1 = new ol.format.GeoJSON();
var features_AbidjanLocationScores_1 = format_AbidjanLocationScores_1.readFeatures(json_AbidjanLocationScores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbidjanLocationScores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbidjanLocationScores_1.addFeatures(features_AbidjanLocationScores_1);
var lyr_AbidjanLocationScores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbidjanLocationScores_1, 
                style: style_AbidjanLocationScores_1,
                popuplayertitle: 'Abidjan Location Scores',
                interactive: true,
    title: 'Abidjan Location Scores<br />\
    <img src="styles/legend/AbidjanLocationScores_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/AbidjanLocationScores_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/AbidjanLocationScores_1_2.png" /> 2 - 4<br />' });
var format_Districtsboundaries_2 = new ol.format.GeoJSON();
var features_Districtsboundaries_2 = format_Districtsboundaries_2.readFeatures(json_Districtsboundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districtsboundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districtsboundaries_2.addFeatures(features_Districtsboundaries_2);
var lyr_Districtsboundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districtsboundaries_2, 
                style: style_Districtsboundaries_2,
                popuplayertitle: 'Districts boundaries',
                interactive: true,
                title: '<img src="styles/legend/Districtsboundaries_2.png" /> Districts boundaries'
            });
var format_AbidjanMetropolitan_3 = new ol.format.GeoJSON();
var features_AbidjanMetropolitan_3 = format_AbidjanMetropolitan_3.readFeatures(json_AbidjanMetropolitan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbidjanMetropolitan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbidjanMetropolitan_3.addFeatures(features_AbidjanMetropolitan_3);
var lyr_AbidjanMetropolitan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbidjanMetropolitan_3, 
                style: style_AbidjanMetropolitan_3,
                popuplayertitle: 'Abidjan Metropolitan',
                interactive: true,
                title: '<img src="styles/legend/AbidjanMetropolitan_3.png" /> Abidjan Metropolitan'
            });
var format_PlannedsitesAbidjan_4 = new ol.format.GeoJSON();
var features_PlannedsitesAbidjan_4 = format_PlannedsitesAbidjan_4.readFeatures(json_PlannedsitesAbidjan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedsitesAbidjan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedsitesAbidjan_4.addFeatures(features_PlannedsitesAbidjan_4);
var lyr_PlannedsitesAbidjan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedsitesAbidjan_4, 
                style: style_PlannedsitesAbidjan_4,
                popuplayertitle: 'Planned sites Abidjan',
                interactive: true,
    title: 'Planned sites Abidjan<br />\
    <img src="styles/legend/PlannedsitesAbidjan_4_0.png" /> Petrol Station<br />\
    <img src="styles/legend/PlannedsitesAbidjan_4_1.png" /> Solar hub<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_AbidjanLocationScores_1.setVisible(true);lyr_Districtsboundaries_2.setVisible(true);lyr_AbidjanMetropolitan_3.setVisible(true);lyr_PlannedsitesAbidjan_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_AbidjanLocationScores_1,lyr_Districtsboundaries_2,lyr_AbidjanMetropolitan_3,lyr_PlannedsitesAbidjan_4];
lyr_AbidjanLocationScores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_Districtsboundaries_2.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_AbidjanMetropolitan_3.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_PlannedsitesAbidjan_4.set('fieldAliases', {'Scenario': 'Scenario', 'Station ID': 'Station ID', 'Country': 'Country', 'City': 'City', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', });
lyr_AbidjanLocationScores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_Districtsboundaries_2.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_AbidjanMetropolitan_3.set('fieldImages', {'adm3_name': 'TextEdit', 'adm3_name1': 'TextEdit', 'adm3_name2': 'TextEdit', 'adm3_name3': 'TextEdit', 'adm3_pcode': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm3_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_PlannedsitesAbidjan_4.set('fieldImages', {'Scenario': 'TextEdit', 'Station ID': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', });
lyr_AbidjanLocationScores_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'score': 'inline label - always visible', });
lyr_Districtsboundaries_2.set('fieldLabels', {'adm2_name': 'hidden field', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'hidden field', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'hidden field', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm2_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', });
lyr_AbidjanMetropolitan_3.set('fieldLabels', {'adm3_name': 'hidden field', 'adm3_name1': 'hidden field', 'adm3_name2': 'hidden field', 'adm3_name3': 'hidden field', 'adm3_pcode': 'hidden field', 'adm2_name': 'hidden field', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'hidden field', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'hidden field', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm3_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', });
lyr_PlannedsitesAbidjan_4.set('fieldLabels', {'Scenario': 'hidden field', 'Station ID': 'hidden field', 'Country': 'inline label - always visible', 'City': 'inline label - always visible', 'Region': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', });
lyr_PlannedsitesAbidjan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});