// $(function() {
//   $(".change-capture").on("click", function(event) {
//     var id = $(this).data("id");
//     console.log('boom');
//     var newCapture = $(this).data("newcapture");

//     var newCaptureState = {
//       captured: newCapture
//     };

//     // Send the PUT request
//     $.ajax("/api/create" + id, {
//       type: "PUT",
//       data: newCaptureState
//     }).then(
//       function() {
//         console.log("changed capture to", newCapture);
//         // Reload page to get the updated list
//         location.reload();
//       }
//     );
//     });

//     $(".create-form").on("submit", function(event) {
//       // preventDefault on submit event.
//       event.preventDefault();

//       var newPokemon = {
//         pokemon_name: $("#poke-input").val().trim(),
//         captured: $("[name=captured]:checked").val().trim()
//       };

//       // Send Post request.
//       $.ajax("/")
//     })
//   });
