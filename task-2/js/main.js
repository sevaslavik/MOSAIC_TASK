window.onload = function() {
	$(document).ready( function () {
    		$('#table_id').DataTable();
	});

	$.ajax({
		url: 'list.json',
		dataType: 'json',
		success: function(data) {
			let daySelect = $('#day');
    	let monthSelect = $('#month');
    	console.log(daySelect, monthSelect);

			for(let i=0; i < data.length; i++){
				let birthday = data[i].birthday_contact;
      	let birthdayArr = birthday.split('-');

				let tableRow = $('tbody').append('<tr class="row"><td>'+ data[i].firstname + '</td><td>' + data[i].lastname + '</td><td>' + data[i].email + '</td><td>' + data[i].phonenumber + '</td><td class="birthday" day="'+ birthdayArr[2]+'" month="'+ birthdayArr[1]+'">' + data[i].birthday_contact + '</td><td>' + data[i].company + '</td></tr>');
			}


			function findCoincidences() {
	        let quantity = 0;

	        for (let i=0; i < rows.length; i++) {
	          if ( rows[i].style.display == 'table-row' ) {
	               quantity += 1;
	          }
	        }

	      if (quantity <= 0) {
	        alert('Сoincidences not found');
	      }
	    }

      let rows = $('.row');
      for (let i=0; i < rows.length; i++) {
					rows[i].style.display = 'table-row';
	       
	    }
      
      let birthDayTd = $('.birthday');

	    daySelect.on('change' , function(event) {
	      event.preventDefault();
		    for (let i = 0; i < rows.length; i++) {
		      rows[i].style.display = 'none';

		      if (this.value == rows[i].children[4].getAttribute('day')) {
		          rows[i].style.display = 'table-row';
		        }
		    }

	      findCoincidences();
	    })

	    monthSelect.on('change' , function(event) {
	      event.preventDefault();
		    for (let i = 0; i < rows.length; i++) {
		      rows[i].style.display = 'none';

		      if (this.value == rows[i].children[4].getAttribute('month')) {
		          rows[i].style.display = 'table-row';
		        }
		    }

	      findCoincidences();
	    })

	    let button = $('#initialView');

	    button.on('click', function(event) {
	    	event.preventDefault();
        for (let i = 0; i < rows.length; i++) {
          rows[i].style.display = 'table-row';
        }
      })
		}
	})
}