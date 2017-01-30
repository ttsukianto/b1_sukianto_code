$('document').ready(function() {
	var imageName = ["images/set.png", "images/bst1.png", "images/bst2.png", "images/bst3.png", "images/bst4.png", "images/bst5.png", "images/bst6.png", "images/bst7.png"];
	var imageText = [
	"Find a set of data.",
	"Place the first number at the top.",
	"59 is greater than 51 so it goes to the right.",
	"62 is greater than 59 so it goes to the right.",
	"30 is less than 51 so it goes to the left.",
	"40 is greater than 30 so it goes to the right.",
	"80 is greater than 62 so it goes to the right."
	];
	var indexNum = 0;
	
	$("#picture").click(function(){
		$("#picture").fadeOut(500, function() {
			$("#picture").attr("src", imageName[indexNum]);
			$("#picturetext").text(imageText[indexNum]);
			indexNum++;
			if (indexNum > 6) {
				indexNum = 0;
			}
			$("#picture").fadeIn(500);
		});
	});

	$("#btnrandom").on("click", function(){
		//parseInt tells the program these values are integers
		//parseFloat tells the program these are decimal numbers
		//val() means read the form box
		//val(something) means write to the form box
		//alert is a pop-up box 
		var min = parseInt($("#txtn1").val()); //decimal numbers
		var max = parseInt($("#txtn2").val());
		//var n1 = parseInt($("#txtn1").val()); //Integers
		//var n2 = parseInt($("#txtn2").val());
		//var n1 = $("#txtn1").val(); //String
		//var n2 = p$("#txtn2").val();
		var r = "";
		for (var i=0; i < 10; i++) {
		  	r += (Math.floor(Math.random() * (max - min + 1)) + min) + ", ";
		}
		$("#result").val(r);
		//return false means no carry over to other functions
		return false;	
	});
	
	$("#btnclear").on("click", function(){
		$("#txtn1").val("");
		$("#txtn2").val("");
		$("#result").val("");
		$("#txtn1").focus(); //return focus to the first number box
		return false;
	});//add clear close

});


/*$(this).text("Clicked"); */

/*$("p").text("Clicked"); */

/*$("p").html('<b style="color:red;">Ouch!</b>You clicked me!');*/

/*$("#jq").html('<b style="color:red;">Ouch!</b>You clicked me!');*/

/*$("#jq").empty();8*/