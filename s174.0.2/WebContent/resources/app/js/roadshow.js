$(document).ready(function() {
	var initPage = function() {
		switchActiveTab('nav-roadshow');

		BookStore.dataTable = $('#roadshow-table').DataTable({
			'serverSide' : true,
			'ajax' : {
				url : 'roadshows',
				type : 'POST',
				contentType : "application/json",
				data: function ( d ) {
					// send only data required by backend API
					delete(d.columns);
					delete(d.order);
					delete(d.search);
			      return JSON.stringify(d);
			    },
			    dataSrc: "roadshows"
			},
			columns: [
	          { data: 'r_id' },
	          { data: 'r_name' },
	          { data: 's_id' },
	          { data: 's_name' },
	          { data: 'l_source' },
	          { data: 'l_status' },
	          { data: 'l_prob' },
	          { data: 's_date' },
	          { data: 'e_date' },
	          { data: 'c_name' },
	          { data: 'c_add' },
	          { data: 'c_phone' },
	          { data: 'amount' }
	          
			],
			select: "single"
			
		});
		

		//$('#office-add-button').click(BookStore.addOffice);
		//$('#office-delete-button').click(BookStore.deleteOffice);
		
		// disable delete button if nothing selected
		/*BookStore.dataTable.on('select', function () {
			$('#office-open-delete-modal-btn').prop('disabled', false);
	    });
		
		BookStore.dataTable.on('deselect', function () {
			$('#office-open-delete-modal-btn').prop('disabled', true);
	    });
	    */
	};

	initPage();
});