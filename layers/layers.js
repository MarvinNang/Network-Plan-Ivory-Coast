var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Districtsboundaries_1 = new ol.format.GeoJSON();
var features_Districtsboundaries_1 = format_Districtsboundaries_1.readFeatures(json_Districtsboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districtsboundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districtsboundaries_1.addFeatures(features_Districtsboundaries_1);
var lyr_Districtsboundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districtsboundaries_1, 
                style: style_Districtsboundaries_1,
                popuplayertitle: 'Districts boundaries',
                interactive: true,
                title: '<img src="styles/legend/Districtsboundaries_1.png" /> Districts boundaries'
            });
var format_AbidjanMetropolitan_2 = new ol.format.GeoJSON();
var features_AbidjanMetropolitan_2 = format_AbidjanMetropolitan_2.readFeatures(json_AbidjanMetropolitan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbidjanMetropolitan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbidjanMetropolitan_2.addFeatures(features_AbidjanMetropolitan_2);
var lyr_AbidjanMetropolitan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbidjanMetropolitan_2, 
                style: style_AbidjanMetropolitan_2,
                popuplayertitle: 'Abidjan Metropolitan',
                interactive: true,
                title: '<img src="styles/legend/AbidjanMetropolitan_2.png" /> Abidjan Metropolitan'
            });
var format_AbidjanLocationScores_3 = new ol.format.GeoJSON();
var features_AbidjanLocationScores_3 = format_AbidjanLocationScores_3.readFeatures(json_AbidjanLocationScores_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbidjanLocationScores_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbidjanLocationScores_3.addFeatures(features_AbidjanLocationScores_3);
var lyr_AbidjanLocationScores_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbidjanLocationScores_3, 
                style: style_AbidjanLocationScores_3,
                popuplayertitle: 'Abidjan Location Scores',
                interactive: true,
    title: 'Abidjan Location Scores<br />\
    <img src="styles/legend/AbidjanLocationScores_3_0.png" /> 0 - 1<br />\
    <img src="styles/legend/AbidjanLocationScores_3_1.png" /> 1 - 2<br />\
    <img src="styles/legend/AbidjanLocationScores_3_2.png" /> 2 - 3<br />\
    <img src="styles/legend/AbidjanLocationScores_3_3.png" /> 3 - 4<br />' });
var format_PlannedPetrolStations_4 = new ol.format.GeoJSON();
var features_PlannedPetrolStations_4 = format_PlannedPetrolStations_4.readFeatures(json_PlannedPetrolStations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedPetrolStations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedPetrolStations_4.addFeatures(features_PlannedPetrolStations_4);
var lyr_PlannedPetrolStations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedPetrolStations_4, 
                style: style_PlannedPetrolStations_4,
                popuplayertitle: 'Planned Petrol Stations',
                interactive: true,
                title: '<img src="styles/legend/PlannedPetrolStations_4.png" /> Planned Petrol Stations'
            });
var format_PlannedSolarhubs_5 = new ol.format.GeoJSON();
var features_PlannedSolarhubs_5 = format_PlannedSolarhubs_5.readFeatures(json_PlannedSolarhubs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedSolarhubs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedSolarhubs_5.addFeatures(features_PlannedSolarhubs_5);
var lyr_PlannedSolarhubs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedSolarhubs_5, 
                style: style_PlannedSolarhubs_5,
                popuplayertitle: 'Planned Solar hubs',
                interactive: true,
                title: '<img src="styles/legend/PlannedSolarhubs_5.png" /> Planned Solar hubs'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Districtsboundaries_1.setVisible(true);lyr_AbidjanMetropolitan_2.setVisible(true);lyr_AbidjanLocationScores_3.setVisible(true);lyr_PlannedPetrolStations_4.setVisible(true);lyr_PlannedSolarhubs_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Districtsboundaries_1,lyr_AbidjanMetropolitan_2,lyr_AbidjanLocationScores_3,lyr_PlannedPetrolStations_4,lyr_PlannedSolarhubs_5];
lyr_Districtsboundaries_1.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_AbidjanMetropolitan_2.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_AbidjanLocationScores_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_PlannedPetrolStations_4.set('fieldAliases', {'Scenario': 'Scenario', 'Station ID': 'Station ID', 'Country': 'Country', 'City': 'City', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Site name': 'Site name', 'Area': 'Area', });
lyr_PlannedSolarhubs_5.set('fieldAliases', {'Scenario': 'Scenario', 'Station ID': 'Station ID', 'Country': 'Country', 'City': 'City', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Site name': 'Site name', 'Area': 'Area', });
lyr_Districtsboundaries_1.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_AbidjanMetropolitan_2.set('fieldImages', {'adm3_name': 'TextEdit', 'adm3_name1': 'TextEdit', 'adm3_name2': 'TextEdit', 'adm3_name3': 'TextEdit', 'adm3_pcode': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm3_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_AbidjanLocationScores_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_PlannedPetrolStations_4.set('fieldImages', {'Scenario': 'TextEdit', 'Station ID': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Site name': 'TextEdit', 'Area': 'TextEdit', });
lyr_PlannedSolarhubs_5.set('fieldImages', {'Scenario': 'TextEdit', 'Station ID': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Site name': 'TextEdit', 'Area': 'TextEdit', });
lyr_Districtsboundaries_1.set('fieldLabels', {'adm2_name': 'inline label - always visible', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'inline label - always visible', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'inline label - always visible', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm2_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', });
lyr_AbidjanMetropolitan_2.set('fieldLabels', {'adm3_name': 'inline label - always visible', 'adm3_name1': 'hidden field', 'adm3_name2': 'hidden field', 'adm3_name3': 'hidden field', 'adm3_pcode': 'hidden field', 'adm2_name': 'inline label - always visible', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'inline label - always visible', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'inline label - always visible', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm3_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', });
lyr_AbidjanLocationScores_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'score': 'inline label - always visible', });
lyr_PlannedPetrolStations_4.set('fieldLabels', {'Scenario': 'hidden field', 'Station ID': 'hidden field', 'Country': 'inline label - always visible', 'City': 'inline label - always visible', 'Region': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', 'Site name': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_PlannedSolarhubs_5.set('fieldLabels', {'Scenario': 'hidden field', 'Station ID': 'hidden field', 'Country': 'inline label - always visible', 'City': 'inline label - always visible', 'Region': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', 'Site name': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_PlannedSolarhubs_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});