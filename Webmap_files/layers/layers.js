var wms_layers = [];

var format_Municipalities_0 = new ol.format.GeoJSON();
var features_Municipalities_0 = format_Municipalities_0.readFeatures(json_Municipalities_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipalities_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipalities_0.addFeatures(features_Municipalities_0);
var lyr_Municipalities_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipalities_0, 
                style: style_Municipalities_0,
                interactive: false,
                title: '<img src="styles/legend/Municipalities_0.png" /> Municipalities'
            });
var format_Residential_areas_1 = new ol.format.GeoJSON();
var features_Residential_areas_1 = format_Residential_areas_1.readFeatures(json_Residential_areas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residential_areas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residential_areas_1.addFeatures(features_Residential_areas_1);
var lyr_Residential_areas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Residential_areas_1, 
                style: style_Residential_areas_1,
                interactive: false,
                title: '<img src="styles/legend/Residential_areas_1.png" /> Residential_areas'
            });
var format_Sea_2 = new ol.format.GeoJSON();
var features_Sea_2 = format_Sea_2.readFeatures(json_Sea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sea_2.addFeatures(features_Sea_2);
var lyr_Sea_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sea_2, 
                style: style_Sea_2,
                interactive: false,
                title: '<img src="styles/legend/Sea_2.png" /> Sea'
            });
var format_landcover_water_3 = new ol.format.GeoJSON();
var features_landcover_water_3 = format_landcover_water_3.readFeatures(json_landcover_water_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landcover_water_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landcover_water_3.addFeatures(features_landcover_water_3);
var lyr_landcover_water_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_landcover_water_3, 
                style: style_landcover_water_3,
                interactive: false,
                title: '<img src="styles/legend/landcover_water_3.png" /> landcover_water'
            });
var format_roads_4 = new ol.format.GeoJSON();
var features_roads_4 = format_roads_4.readFeatures(json_roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_4.addFeatures(features_roads_4);
var lyr_roads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_4, 
                style: style_roads_4,
                interactive: false,
                title: '<img src="styles/legend/roads_4.png" /> roads'
            });
var format_Riskzones_5 = new ol.format.GeoJSON();
var features_Riskzones_5 = format_Riskzones_5.readFeatures(json_Riskzones_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riskzones_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riskzones_5.addFeatures(features_Riskzones_5);
var lyr_Riskzones_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Riskzones_5, 
                style: style_Riskzones_5,
                interactive: false,
                title: '<img src="styles/legend/Riskzones_5.png" /> Risk zones'
            });
var format_Daycaresatrisk_6 = new ol.format.GeoJSON();
var features_Daycaresatrisk_6 = format_Daycaresatrisk_6.readFeatures(json_Daycaresatrisk_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daycaresatrisk_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daycaresatrisk_6.addFeatures(features_Daycaresatrisk_6);
var lyr_Daycaresatrisk_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Daycaresatrisk_6, 
                style: style_Daycaresatrisk_6,
                interactive: true,
                title: '<img src="styles/legend/Daycaresatrisk_6.png" /> Daycares at risk'
            });

lyr_Municipalities_0.setVisible(true);lyr_Residential_areas_1.setVisible(true);lyr_Sea_2.setVisible(true);lyr_landcover_water_3.setVisible(true);lyr_roads_4.setVisible(true);lyr_Riskzones_5.setVisible(true);lyr_Daycaresatrisk_6.setVisible(true);
var layersList = [lyr_Municipalities_0,lyr_Residential_areas_1,lyr_Sea_2,lyr_landcover_water_3,lyr_roads_4,lyr_Riskzones_5,lyr_Daycaresatrisk_6];
lyr_Municipalities_0.set('fieldAliases', {'nimi': 'nimi', 'nimi_r': 'nimi_r', 'kunta': 'kunta', 'mtryhm': 'mtryhm', });
lyr_Residential_areas_1.set('fieldAliases', {'fid': 'fid', 'maankaytto': 'maankaytto', 'mtryhm': 'mtryhm', });
lyr_Sea_2.set('fieldAliases', {'mtryhm': 'mtryhm', });
lyr_landcover_water_3.set('fieldAliases', {'kohde_id': 'kohde_id', 'kunta': 'kunta', 'paaluokka': 'paaluokka', 'alaluokka': 'alaluokka', 'ryhma': 'ryhma', 'koodi': 'koodi', 'kuvaus': 'kuvaus', 'p_ala_m2': 'p_ala_m2', });
lyr_roads_4.set('fieldAliases', {'ID': 'ID', 'LINK_ID': 'LINK_ID', 'KUNTAKOODI': 'KUNTAKOODI', 'ALKU_M': 'ALKU_M', 'LOPPU_M': 'LOPPU_M', 'MUOKKAUSPV': 'MUOKKAUSPV', 'SEGM_ID': 'SEGM_ID', });
lyr_Riskzones_5.set('fieldAliases', {'LINK_ID': 'LINK_ID', 'LINK_MMLID': 'LINK_MMLID', 'SEGM_ID': 'SEGM_ID', 'KUNTAKOODI': 'KUNTAKOODI', 'HALLINN_LK': 'HALLINN_LK', 'TOIMINN_LK': 'TOIMINN_LK', 'LINKKITYYP': 'LINKKITYYP', 'TIENUMERO': 'TIENUMERO', 'TIEOSANRO': 'TIEOSANRO', 'SILTA_ALIK': 'SILTA_ALIK', 'AJORATA': 'AJORATA', 'AET': 'AET', 'LET': 'LET', 'AJOSUUNTA': 'AJOSUUNTA', 'TIENIMI_SU': 'TIENIMI_SU', 'TIENIMI_RU': 'TIENIMI_RU', 'TIENIMI_SA': 'TIENIMI_SA', 'ENS_TALO_O': 'ENS_TALO_O', 'ENS_TALO_V': 'ENS_TALO_V', 'VIIM_TAL_O': 'VIIM_TAL_O', 'VIIM_TAL_V': 'VIIM_TAL_V', 'MUOKKAUSPV': 'MUOKKAUSPV', 'SIJ_TARK': 'SIJ_TARK', 'KOR_TARK': 'KOR_TARK', 'ALKU_PAALU': 'ALKU_PAALU', 'LOPP_PAALU': 'LOPP_PAALU', 'GEOM_FLIP': 'GEOM_FLIP', 'LINK_TILA': 'LINK_TILA', 'GEOM_LAHDE': 'GEOM_LAHDE', 'MTK_TIE_LK': 'MTK_TIE_LK', 'RoadName': 'RoadName', 'Labels': 'Labels', '2011_1': '2011_1', '2012_1': '2012_1', '2013_1': '2013_1', '2014_1': '2014_1', '2015_1': '2015_1', '2016_1': '2016_1', 'Nimi': 'Nimi', 'Min_dist': 'Min_dist', });
lyr_Daycaresatrisk_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'Address', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Municipalities_0.set('fieldImages', {'nimi': 'TextEdit', 'nimi_r': 'TextEdit', 'kunta': 'TextEdit', 'mtryhm': 'TextEdit', });
lyr_Residential_areas_1.set('fieldImages', {'fid': 'TextEdit', 'maankaytto': 'TextEdit', 'mtryhm': 'TextEdit', });
lyr_Sea_2.set('fieldImages', {'mtryhm': 'TextEdit', });
lyr_landcover_water_3.set('fieldImages', {'kohde_id': 'TextEdit', 'kunta': 'TextEdit', 'paaluokka': 'TextEdit', 'alaluokka': 'TextEdit', 'ryhma': 'TextEdit', 'koodi': 'TextEdit', 'kuvaus': 'TextEdit', 'p_ala_m2': 'TextEdit', });
lyr_roads_4.set('fieldImages', {'ID': 'TextEdit', 'LINK_ID': 'TextEdit', 'KUNTAKOODI': 'Range', 'ALKU_M': 'TextEdit', 'LOPPU_M': 'TextEdit', 'MUOKKAUSPV': 'TextEdit', 'SEGM_ID': 'TextEdit', });
lyr_Riskzones_5.set('fieldImages', {'LINK_ID': 'TextEdit', 'LINK_MMLID': 'TextEdit', 'SEGM_ID': 'TextEdit', 'KUNTAKOODI': 'TextEdit', 'HALLINN_LK': 'TextEdit', 'TOIMINN_LK': 'TextEdit', 'LINKKITYYP': 'TextEdit', 'TIENUMERO': 'TextEdit', 'TIEOSANRO': 'TextEdit', 'SILTA_ALIK': 'TextEdit', 'AJORATA': 'TextEdit', 'AET': 'TextEdit', 'LET': 'TextEdit', 'AJOSUUNTA': 'TextEdit', 'TIENIMI_SU': 'TextEdit', 'TIENIMI_RU': 'TextEdit', 'TIENIMI_SA': 'TextEdit', 'ENS_TALO_O': 'TextEdit', 'ENS_TALO_V': 'TextEdit', 'VIIM_TAL_O': 'TextEdit', 'VIIM_TAL_V': 'TextEdit', 'MUOKKAUSPV': 'TextEdit', 'SIJ_TARK': 'TextEdit', 'KOR_TARK': 'TextEdit', 'ALKU_PAALU': 'TextEdit', 'LOPP_PAALU': 'TextEdit', 'GEOM_FLIP': 'TextEdit', 'LINK_TILA': 'TextEdit', 'GEOM_LAHDE': 'TextEdit', 'MTK_TIE_LK': 'TextEdit', 'RoadName': 'TextEdit', 'Labels': 'TextEdit', '2011_1': 'TextEdit', '2012_1': 'TextEdit', '2013_1': 'TextEdit', '2014_1': 'TextEdit', '2015_1': 'TextEdit', '2016_1': 'TextEdit', 'Nimi': 'TextEdit', 'Min_dist': 'TextEdit', });
lyr_Daycaresatrisk_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'snippet': 'Hidden', });
lyr_Municipalities_0.set('fieldLabels', {'nimi': 'no label', 'nimi_r': 'no label', 'kunta': 'no label', 'mtryhm': 'no label', });
lyr_Residential_areas_1.set('fieldLabels', {'fid': 'no label', 'maankaytto': 'no label', 'mtryhm': 'no label', });
lyr_Sea_2.set('fieldLabels', {'mtryhm': 'no label', });
lyr_landcover_water_3.set('fieldLabels', {'kohde_id': 'no label', 'kunta': 'no label', 'paaluokka': 'no label', 'alaluokka': 'no label', 'ryhma': 'no label', 'koodi': 'no label', 'kuvaus': 'no label', 'p_ala_m2': 'no label', });
lyr_roads_4.set('fieldLabels', {'ID': 'no label', 'LINK_ID': 'no label', 'KUNTAKOODI': 'no label', 'ALKU_M': 'no label', 'LOPPU_M': 'no label', 'MUOKKAUSPV': 'no label', 'SEGM_ID': 'no label', });
lyr_Riskzones_5.set('fieldLabels', {'LINK_ID': 'no label', 'LINK_MMLID': 'no label', 'SEGM_ID': 'no label', 'KUNTAKOODI': 'no label', 'HALLINN_LK': 'no label', 'TOIMINN_LK': 'no label', 'LINKKITYYP': 'no label', 'TIENUMERO': 'no label', 'TIEOSANRO': 'no label', 'SILTA_ALIK': 'no label', 'AJORATA': 'no label', 'AET': 'no label', 'LET': 'no label', 'AJOSUUNTA': 'no label', 'TIENIMI_SU': 'no label', 'TIENIMI_RU': 'no label', 'TIENIMI_SA': 'no label', 'ENS_TALO_O': 'no label', 'ENS_TALO_V': 'no label', 'VIIM_TAL_O': 'no label', 'VIIM_TAL_V': 'no label', 'MUOKKAUSPV': 'no label', 'SIJ_TARK': 'no label', 'KOR_TARK': 'no label', 'ALKU_PAALU': 'no label', 'LOPP_PAALU': 'no label', 'GEOM_FLIP': 'no label', 'LINK_TILA': 'no label', 'GEOM_LAHDE': 'no label', 'MTK_TIE_LK': 'no label', 'RoadName': 'no label', 'Labels': 'no label', '2011_1': 'no label', '2012_1': 'no label', '2013_1': 'no label', '2014_1': 'no label', '2015_1': 'no label', '2016_1': 'no label', 'Nimi': 'no label', 'Min_dist': 'no label', });
lyr_Daycaresatrisk_6.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'inline label', });
lyr_Daycaresatrisk_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});