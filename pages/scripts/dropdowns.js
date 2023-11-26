
document.addEventListener('DOMContentLoaded', (event) => {
	console.log("loaded");
    // Get all dropdowns
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        // Add event listener to each dropdown
        dropdown.addEventListener('show.bs.dropdown', function () {
			console.log("show thing");
            // On dropdown show, adjust the height
            var dropdownMenu = this.querySelector('.dropdown-menu');
            this.style.height =
        });

        dropdown.addEventListener('hide.bs.dropdown', function () {
            // On dropdown hide, reset the height
            this.style.height = "75px"; // ohtml push dropdown dowhtml push dropdown dowhtml push dropdown downginal height of the button
        });
    });
});
