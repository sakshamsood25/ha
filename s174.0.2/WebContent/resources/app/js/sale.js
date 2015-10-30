$(document).ready(function() {
	var initPage = function() {
		switchActiveTab('nav-sale');

		BookStore.dataTable = $('#sale-table').DataTable({
			'serverSide' : true,
			'ajax' : {
				url : 'sales',
				type : 'POST',
				contentType : "application/json",
				data: function ( d ) {
					// send only data required by backend API
					delete(d.columns);
					delete(d.order);
					delete(d.search);
			      return JSON.stringify(d);
			    },
			    dataSrc: "sales"
			},
			columns: [
	          { data: 'id' },
	          { data: 'f_name' },
	          { data: 'l_name' },
	          { data: 'role' },
	          { data: 'office_id' },
	          { data: 'office_name' },
	          { data: 'phone' },
	          { data: 'address' },
	          { data: 'zip_code' },
	          { data: 'sales' },
	          { data: 'experience' },
	          
			],
			select: "single"
			
		});
		

		//$('#office-add-button').click(BookStore.addOffice);
		//$('#office-delete-button').click(BookStore.deleteOffice);
		
		// disable delete button if nothing selected
		BookStore.dataTable.on('select', function () {
			$('#office-open-delete-modal-btn').prop('disabled', false);
	    });
		
		BookStore.dataTable.on('deselect', function () {
			$('#office-open-delete-modal-btn').prop('disabled', true);
	    });
	};

	initPage();
});