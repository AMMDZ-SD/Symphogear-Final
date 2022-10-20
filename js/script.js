const img = $("#img");
const nombre = $("#nombre");
const personaje = $("#nombre-p1");
const symphogears = $("#symphogears");
const per_nombre = $("#per-nombre");
const per_img = $("#per-img");


nombre.on("change", () => {
	let opc = "<option>Seleccione...</option>";

	if (nombre.val() == "hibiki") {
		per_nombre.html("Hibiki Tachibana");
		per_img.attr("src", "img/hq.png");
		per_img.attr("alt", "Hibiki Tachibana");
		per_img.attr("onclick", "page('hibiki')");
		$(location).attr("href", "page/hibiki.html?personaje="+ pag);
		symphogears.removeClass("d-none");
		
		
		
	} else if (nombre.val() == "tsubasa") {
		per_nombre.html("Tsubasa Kazanari");
		per_img.attr("src", "img/tk.png");
		per_img.attr("alt", "tsubasa");
		per_img.attr("onclick", "page('tsubasa')");
		symphogears.removeClass("d-none");
		
		
		
	} else if (nombre.val() == "chris") {
		per_nombre.html("Chris Yukine");
		per_img.attr("src", "img/cy.png");
		per_img.attr("alt", "chris");
		per_img.attr("onclick", "page('chris')");
		symphogears.removeClass("d-none");
		
	
	} else if (nombre.val() == "maria") {
		per_nombre.html("Maria Cadenzavna Eve");
		per_img.attr("src", "img/mc.png");
		per_img.attr("alt", "Maria");
		per_img.attr("onclick", "page('maria')");
		symphogears.removeClass("d-none");
		
		
	} else if (nombre.val() == "shirabe") {
		per_nombre.html("Shirabe Tsukuyomi");
		per_img.attr("src", "img/sst.png");
		per_img.attr("alt", "shirabe");
		per_img.attr("onclick", "page('shirabe')");
		symphogears.removeClass("d-none");
		
		
	} else if (nombre.val() == "kirika") {
		per_nombre.html("Kirika Akatsuki");
		per_img.attr("src", "img/ka.png");
		per_img.attr("alt", "kirika");
		per_img.attr("onclick", "page('kirika')");
		symphogears.removeClass("d-none");
		
	
	
	} else if (nombre.val() == "adam") {
		per_nombre.html("Adam Weishaupt");
		per_img.attr("src", "img/aw.png");
		per_img.attr("alt", "adam");
		per_img.attr("onclick", "page('adam')");
		symphogears.removeClass("d-none");
		
		
	} else if (nombre.val() == "shem-ha") {
		per_nombre.html("Shem-Ha Mephorash");
		per_img.attr("src", "img/sh.png");
		per_img.attr("alt", "shem-ha");
		per_img.attr("onclick", "page('shemha')");
		symphogears.removeClass("d-none");
		
		
	} else if (nombre.val() == "miku") {
		per_nombre.html("Miku Kohinata");
		per_img.attr("src", "img/mk.png");
		per_img.attr("alt", "miku");
		per_img.attr("onclick", "page('miku')");
		symphogears.removeClass("d-none");
		
		
	} else {
		symphogears.addClass("d-none");
		
	}
});

