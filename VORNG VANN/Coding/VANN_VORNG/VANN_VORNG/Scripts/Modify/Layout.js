// Header Design
$(document).ready(function () {
    var logo_img = $('<img />', {
        id: 'logo',
        src: '/Photo/vann_logo.PNG',
        alt: 'MyAlt'
    });

    var btnHome = $('<button/>', {
        class: 'btn_header',
        id: 'btn_Home',
        text: 'Home'
    })
    var btnAbout = $('<button/>', {
        class: 'btn_header',
        id: 'btn_About',
        text: 'About'
    });
    var btnService = $('<button/>', {
        class: 'btn_header',
        id: 'btn_Service',
        text: 'Service'
    });
    var btnContact = $('<button/>', {
        class: 'btn_header',
        id: 'btn_Contact',
        text: 'Contact'
    });

    var table = $('<table/>', {
        id: 'table_header'
    });

    var row = $('<tr></tr>');
    var data = $('<td></td>');
    data.append(logo_img);
    data.append(btnHome);
    data.append(btnAbout);
    data.append(btnService);
    data.append(btnContact);
    row.append(data)
    table.append(row);
    $('#header_logo').append(table);
    //$('#logo').append(logo_img);
    //$('#header_navigation').append(btnHome, btnAbout, btnService, btnContact);
});
