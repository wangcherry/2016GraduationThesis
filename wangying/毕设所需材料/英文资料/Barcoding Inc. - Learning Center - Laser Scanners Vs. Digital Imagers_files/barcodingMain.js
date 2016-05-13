// Makes the whole object with the class clickable based on the interior anchor link
$(".clickable").click(function(){
	 window.location=$(this).find("a").attr("href");
	 return false;
});
	
// Creates Site-wide Mega Menu Navigation CTA
jQuery(function(){
var SelfLocation = window.location.href.split('?');
switch (SelfLocation[1]) {
  case "justify_right":
	jQuery(".megamenu").megamenu({ 'justify':'right' });
	break;
  case "justify_left":
  default:
	jQuery(".megamenu").megamenu();
}
});

var hardwareHtml = 	'<div id="sub-hardware-list" class="menu-dropdown">'
hardwareHtml +=	'<div><strong><a href="/mobile/">Mobile Hardware</a></strong><ul>'
hardwareHtml +=	'<li><a href="/mobile/mobile-computers.shtml">Mobile Computers </a></li>'
hardwareHtml +=	'<li><a href="/mobile/mobile-printers.shtml">Mobile Printers </a></li>'
hardwareHtml +=	'<li><a href="/mobile/mobile-software.shtml">Mobile Software </a></li>'
hardwareHtml +=	'<li><a href="/mobile/mobile-labels.shtml">Labels, Ribbons, & Paper </a></li>'
hardwareHtml +=	'<li><a href="/mobile/mobile-network-communication.shtml">Network Communication </a></li>'
hardwareHtml +=	'<li><a href="/Mobile/mobile-faq.shtml">Mobile FAQ</a></li>'
hardwareHtml +=	'<li><a href="/services/barcode_scanner_rental.shtml">Rentals</a></li>'
hardwareHtml +=	'<li><a href="/mobile/mobile-tablet-pcs.shtml">Tablet PCs</a></li>'
hardwareHtml +=	'<li><a href="http://buy.barcoding.com/" class="buy-barcoding-link">Buy Hardware Now!</a></li>'
hardwareHtml +=	'</ul></div>'
hardwareHtml +=	'<div><strong><a href="/barcode/">Barcode Hardware</a></strong><ul>'
hardwareHtml +=	'<li><a href="/barcode/barcode-scanners.shtml"> Barcode Scanners</a></li>'
hardwareHtml +=	'<li><a href="/barcode/barcode-printers.shtml">Barcode Printers</a></li>'
hardwareHtml +=	'<li><a href="/barcode/barcode-labels-industry.shtml">Barcode Labels, Media</a></li>'
hardwareHtml +=	'<li><a href="/barcode/barcode-software.shtml">Barcode Software</a></li>'
hardwareHtml +=	'<li><a href="/barcode/barcode-faqs.shtml">Barcoding FAQ </a></li>'
hardwareHtml +=	'<li><a href="/popular_products.shtml">Popular Products</a></li>'
hardwareHtml +=	'<li><a href="http://buy.barcoding.com/" class="buy-barcoding-link">Buy Hardware Now!</a></li>'
hardwareHtml +=	'</ul></div>'
hardwareHtml +=	'<div><strong><a href="/wireless/">Wireless Hardware</a></strong><ul>'
hardwareHtml +=	'<li><a href="/wireless/wireless_barcode_scanners.shtml">Wireless Scanners</a></li>'
hardwareHtml +=	'<li><a href="/wireless/vehicle_mount_computers.shtml">Vehicle Mount Computers</a></li>'
hardwareHtml +=	'<li><a href="/wireless/pda-barcode-scanner.shtml">PDA Barcode Scanners </a></li>'
hardwareHtml +=	'<li><a href="/wireless/wireless_faqs.shtml">Wireless FAQ</a></li>'
hardwareHtml +=	'<li><a href="http://buy.barcoding.com/" class="buy-barcoding-link">Buy Hardware Now!</a></li>'
hardwareHtml +=	'</ul></div>'
// hardwareHtml +=	'<div><strong><a href="/rfid/">RFID</a></strong><ul>'
// hardwareHtml +=	'<li><a href="/rfid/rfid-readers-new.shtml">RFID Readers</a></li>'
// hardwareHtml +=	'<li><a href="/rfid/rfid-kits.shtml">RFID Kits</a></li>'
// hardwareHtml +=	'<li><a href="/rfid/rfid-printers.shtml">RFID Printers </a></li>'
// hardwareHtml +=	'<li><a href="/rfid/rfid-faq.shtml">RFID FAQ </a></li>'
// hardwareHtml +=	'</ul></div></div>'
$('#sub-hardware').append(hardwareHtml);

var softwareHtml = '<div id="sub-software-list" class="menu-dropdown"><ul><li><a href="/tracking-software/barcode_fixed_and_portable_assets.shtml">Asset Tracking Software</a></li>'
softwareHtml += '<li><a href="/barcode/barcode-label-software.shtml">Barcode Label Software</a> </li>'
softwareHtml += '<li style="text-transform: none !important;"><a href="/capturesoft/express/">CaptureSoft eXpress&trade;</a></li>'
softwareHtml += '<li><a href="/mobile/field_service.shtml">Field Service Software</a></li>'
softwareHtml += '<li><a href="/tracking-software/barcode_stockroom_inventory.shtml">Inventory Control Software </a></li>'
softwareHtml += '<li><a href="/tracking-software/barcode_package_tracking.shtml">Package Tracking Software</a></li>'
softwareHtml += '<li><a href="/routeaccounting/">Route Accounting Software</a></li>'
softwareHtml += '<li><a href="/tracking-software/barcode_warehouse_wms.shtml">Warehouse Management Software </a></li>'
softwareHtml += '<li><a href="/tracking-software/" rel="nofollow">>> More Software </a></li></ul></div>'
$('#sub-software').append(softwareHtml);

// remove hover over services
// var servicesHtml = '<div id="sub-services-list" class="menu-dropdown"><ul>'
// servicesHtml += '<li><a href="/services/professional-services.shtml">Professional Services</a></li>'
// servicesHtml += '<li><a href="/services/managed/">Managed Services</a></li>'
// servicesHtml += '<li><a href="/services/software/">Software Services</a></li>'
// servicesHtml += '</ul></div>'
// $('#sub-services').append(servicesHtml);

var partnersHtml = '<div id="sub-services-list" class="menu-dropdown">'
partnersHtml += '<div><strong><a href="/partners/hardware-partners.shtml">Hardware</a></strong><ul>'
partnersHtml += '<li><a href="/partners/advantech.shtml">Advantech DLoG</a></li>'
partnersHtml += '<li><a href="/partners/honeywell.shtml">Honeywell</a></li>'
partnersHtml += '<li><a href="/partners/intermec.asp">Intermec</a></li>'
partnersHtml += '<li><a href="/partners/janam.shtml">Janam</a></li>'
partnersHtml += '<li><a href="/partners/mobiledemand.shtml">MobileDemand</a></li>'
partnersHtml += '<li><a href="/partners/motion.shtml">Motion</a></li>'
partnersHtml += '<li><a href="/partners/symbol.shtml">Motorola</a></li>'
partnersHtml += '<li><a href="/partners/panasonic.shtml">Panasonic</a></li>'
partnersHtml += '<li><a href="/partners/psion-teklogix.shtml">Psion</a></li>'
partnersHtml += '<li><a href="/partners/zebra.shtml">Zebra</a></li>'
partnersHtml += '</ul></div>'
partnersHtml += '<div><strong><a href="/partners/software-partners.shtml">Software</a></strong><ul>'
partnersHtml += '<li><a href="/partners/airclic2.shtml">Airclic</a></li>'
partnersHtml += '<li><a href="/partners/apacheta.shtml">Apacheta</a></li>'
partnersHtml += '<li><a href="/capturesoft/">CaptureSoft</a></li>'
partnersHtml += '<li><a href="/partners/descartes.shtml">Descartes</a></li>'
partnersHtml += '<li><a href="/partners/IntelliTrack.shtml">IntelliTrack</a></li>'
partnersHtml += '<li><a href="/partners/nicelabel.shtml">NiceLabel</a></li>'
partnersHtml += '<li><a href="/partners/pinc.shtml">PINC Solutions</a></li>'
partnersHtml += '<li><a href="/partners/rfgen.shtml">RFgen Software</a></li>'
partnersHtml += '<li><a href="/partners/rutherford.shtml">Rutherford & Associates</a></li>'
partnersHtml += '<li><a href="/partners/soti.shtml">SOTI</a></li>'
partnersHtml += '<li><a href="/partners/tekcore.shtml">TekCore</a></li>'
partnersHtml += '</ul></div>'
partnersHtml += '<div><strong><a href="/partners/legacy.shtml">Legacy Hardware</a></strong><ul>'
partnersHtml += '<li><a href="/partners/eltron.shtml">Eltron</a></li>'
partnersHtml += '<li><a href="/partners/hhp.shtml">HHP</a></li>'
partnersHtml += '<li><a href="/partners/metrologic.shtml">Metrologic</a></li>'
partnersHtml += '<li><a href="/partners/norand.shtml">Norand</a></li>'
partnersHtml += '<li><a href="/partners/psc.shtml">PSC</a></li>'
partnersHtml += '<li><a href="/partners/symbol.shtml">Symbol Technologies</a></li>'
partnersHtml += '<li><a href="/partners/telxon.shtml">Telxon</a></li>'
partnersHtml += '<li><a href="/partners/walkabout.shtml">Walkabout</a></li>'
partnersHtml += '</ul></div></div>'
$('#sub-partners').append(partnersHtml);
 
 // drop down menu on consumables tab - Printer Essentials hover
var printerPlaceholder = '<div id="sub-printer-list" class="menu-dropdown" style="z-index:20;">';
printerPlaceholder += '<li><a href="/consumables/labels.shtml">Labels</a></li>';
printerPlaceholder += '<li><a href="/consumables/thermal-ribbons.shtml">Ribbons</a></li>';
printerPlaceholder += '<li><a href="/consumables/printheads.shtml">Printheads</a></li>';
printerPlaceholder += '<li><a href="/consumables/stock-zebra-supplies.shtml">Stock Zebra Supplies</a></li>';
printerPlaceholder += '<li><a href="/consumables/stock-intermec-supplies.shtml">Stock Intermec Supplies</a></li>';
printerPlaceholder += '<li><a href="/consumables/printer-repair.shtml">Printer Repair</a></li>';
printerPlaceholder += '<li><a href="http://buy.barcoding.com/" class="buy-barcoding-link">Buy Hardware Now!</a></li>'
printerPlaceholder += '</ul></div>';

var customPlaceholder = '<div id="sub-custom-list" class="menu-dropdown" style="z-index:20;">';
customPlaceholder += '<li><a href="/consumables/custom-labels.shtml">Custom Labels</a></li>';
customPlaceholder += '<li><a href="/order-labels.shtml">DoD Labels</a></li>';
customPlaceholder += '<li><a href="/consumables/wristbands.shtml">Wristbands</a></li>';
customPlaceholder += '</ul></div>';

var industryPlaceholder = '<div id="sub-industry-list" class="menu-dropdown" style="z-index:20;">';
industryPlaceholder += '<li><a href="/consumables/healthcare-hospitals.shtml">Healthcare/Hospital</a></li>';
industryPlaceholder += '<li><a href="/consumables/warehouse-labels.shtml">Warehouse Labels</a></li>';
industryPlaceholder += '</ul></div>';

var resourcesPlaceholder = '<div id="sub-resources-list" class="menu-dropdown" style="z-index:20;">';
resourcesPlaceholder += '<li><a href="/consumables/aboutmediaspecialists.shtml">Meet our Experts</a></li>';
resourcesPlaceholder += '<li><a href="/consumables/choosetherightlabel.shtml">How to Select</a></li>';
resourcesPlaceholder += '<li><a href="http://blog.barcoding.com/selector/zebra-supplies.php">Label Selector</a></li>';
resourcesPlaceholder += '<li><a href="/executive-forum-event/">Barcoding\x27s Executive Forum</a></li>';

resourcesPlaceholder += '</ul></div>';
$('.consumables #sub-printer-essentials').append(printerPlaceholder);
$('.consumables #sub-custom-media').append(customPlaceholder);
$('.consumables #sub-industry').append(industryPlaceholder);
$('.consumables #sub-resources').append(resourcesPlaceholder);


 // drop down menu on rfid tab 
var rfidSoftwareHtml = '<div id="sub-rfid-software" class="menu-dropdown" style="z-index:20;">';
rfidSoftwareHtml += '<li><a href="/rfid/realview.shtml">RealView</a></li>';
rfidSoftwareHtml += '<li><a href="/rfid/realview_listener_service.shtml">RealView Listener Service</a></li>';
rfidSoftwareHtml += '</ul></div>';
$('.rfid-solutions #sub-rfid-software').append(rfidSoftwareHtml);

var rfidHardwareHtml = '<div id="sub-rfid-hardware" class="menu-dropdown" style="z-index:20;">';
rfidHardwareHtml += '<li><a href="/rfid/tags.shtml">Tags</a></li>';
rfidHardwareHtml += '<li><a href="/rfid/readers.shtml">Readers</a></li>';
rfidHardwareHtml += '<li><a href="/rfid/handheld-readers.shtml">RFID Handhelds</a></li>';
rfidHardwareHtml += '<li><a href="/rfid/printers.shtml">Printers</a></li>';
rfidHardwareHtml += '<li><a href="/rfid/antennas.shtml">Antennas</a></li>';
rfidHardwareHtml += '<li><a href="/rfid/specialty.shtml">CaptureTech Products</a></li>';
rfidHardwareHtml += '<li><a href="http://buy.barcoding.com/" class="buy-barcoding-link">Buy Hardware Now!</a></li>'
rfidHardwareHtml += '</ul></div>';
$('.rfid-solutions #sub-rfid-hardware').append(rfidHardwareHtml);

var rfidIndustriesHtml = '<div id="sub-rfid-industries" class="menu-dropdown" style="z-index:20;">';
rfidIndustriesHtml += '<li><a href="/rfid/manufacturing.shtml">Manufacturing</a></li>';
rfidIndustriesHtml += '<li><a href="/rfid/healthcare.shtml">Healthcare</a></li>';
rfidIndustriesHtml += '<li><a href="/rfid/retail.shtml">Retail</a></li>';
rfidIndustriesHtml += '<li><a href="/rfid/warehouse.shtml">Warehouse</a></li>';
rfidIndustriesHtml += '</ul></div>';
$('.rfid-solutions #sub-rfid-industries').append(rfidIndustriesHtml);

var rfidResourcesHtml = '<div id="sub-rfid-resources" class="menu-dropdown" style="z-index:20;">';
rfidResourcesHtml += '<li><a href="/rfid/experts.shtml">Our Experts</a></li>';
rfidResourcesHtml += '<li><a href="/rfid/partners.shtml">Our Partners</a></li>';
rfidResourcesHtml += '<li><a href="/rfid/customers.shtml">Our Customers</a></li>';
rfidResourcesHtml += '<li><a href="/rfid/case-studies.shtml">RFID Case Studies</a></li>';
rfidResourcesHtml += '<li><a href="/rfid/tic.shtml">Technology Integration Center</a></li>';
rfidResourcesHtml += '<li><a href="/rfid/videos.shtml">Videos</a></li>';
rfidResourcesHtml += '<li><a href="/executive-forum-event/">Barcoding\x27s Executive Forum</a></li>'
rfidResourcesHtml += '<li><a href="/faq/rfid-tag-cost.shtml">FAQ - Tag Cost</a></li>';
rfidResourcesHtml += '</ul></div>';
$('.rfid-solutions #sub-rfid-resources').append(rfidResourcesHtml);

var rfidReadZoneHtml = '<div id="sub-rfid-read-zone" class="menu-dropdown" style="z-index:20;">';
rfidReadZoneHtml += '<li><a href="/rfid/what-is-rfid.shtml">What is RFID</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/how-does-rfid-work-warehouse.shtml">How RFID works</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/what-is-rfid-tag.shtml">What is a RFID tag</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/rfid-replace-barcodes.shtml">Will RFID Replace Barcodes</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/rfid-tag-cost.shtml">How Much Does a Tag Cost</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/benefits-of-RFID.shtml">Benefits of RFID</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/RFID-vs-barcodes.shtml">Is RFID better than barcodes</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/active-or-passive-RFID-tags.shtml">Active vs. Passive</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/when-to-use-rfid.shtml">When RFID is Useful</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/selecting-rfid.shtml">Selecting RFID System</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/inventory-control.shtml">RFID for Inventory Control</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/rfid-readers-how-to-choose.shtml">how to choose RFID reader</a></li>';
rfidReadZoneHtml += '<li><a href="/rfid/NFC-vs-RFID.shtml">NFC vs. RFID</a></li>';
rfidReadZoneHtml += '</ul></div>';
$('.rfid-solutions #sub-rfid-read-zone').append(rfidReadZoneHtml);

var resourcesHtml = '<div id="sub-resources-list" class="menu-dropdown">'
resourcesHtml += '<div><strong><a href="/information/learn_about_barcodes.shtml">Barcoding Basics</a></strong><ul>'
resourcesHtml += '<li><a href="http://generator.barcoding.com">Barcode Generator</a></li>'
resourcesHtml += '<li><a href="/articles/">Articles</a></li>'
resourcesHtml += '<li><a href="/information/barcode_history.shtml">History of Barcodes</a></li>'
resourcesHtml += '<li><a href="/barcode_glossary.shtml">Barcode Glossary</a></li>'
resourcesHtml += '<li><a href="/faq/">FAQ</a></li>'
resourcesHtml += '</ul></div>'
resourcesHtml += '<div><strong><a href="/information/">Resource Center</a></strong><ul>'
resourcesHtml += '<li><a href="http://blog.barcoding.com/">Blog</a></li>'
resourcesHtml += '<li><a href="/success_stories/">Case Studies</a></li>'
resourcesHtml += '<li><a href="http://www.youtube.com/user/TheBarcodingInc">Video Library</a></li>'
resourcesHtml += '<li><a href="/press/2015/index.shtml">News</a></li>'
resourcesHtml += '<li><a href="http://learn.barcoding.com/subscribe-to-the-eye-on-roi-barcoding-inc.-newsletter">Newsletter Sign-up</a></li>'
resourcesHtml += '<li><a href="/roi-calculator/">ROI Calculator</a></li>'
resourcesHtml += '</ul></div></div>'
$('#sub-resourcecenter').append(resourcesHtml);

// Creates Orange Free Quote CTA
var headerBugHtml = '<div id="headerBug" class="clickable" style="position:absolute;top:0;margin: 0 50%; width: 150px; left: 175px; padding: 12px 10px 12px 10px;background-color:#f2a034;border-radius: 0 0 6px 6px;"> '
headerBugHtml += 'Ready to Purchase? <br /><a href="http://buy.barcoding.com/" style="color:#000;font-size:16px;font-weight:800;">Click Here</a>'
headerBugHtml += '</div>'
$('body').append(headerBugHtml)


  

	
		
	
