var $rows = $('#tabela tbody tr');
$('#szukaj_osoby').keyup(function() {

            var val = this.value;

	    $rows.show().filter(function() {
	        var text = $(this).text();
            if (val==='') { return false; }
	        return (text.indexOf(val)<=1);
	    }).hide();
	});

