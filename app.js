jQuery(function ($) {
    function goster(ilk) {
        $('.vakit_bilgi.imsak').text(ilk.Imsak);
        $('.vakit_bilgi.gunes').text(ilk.Gunes);
        $('.vakit_bilgi.ogle').text(ilk.Ogle);
        $('.vakit_bilgi.ikindi').text(ilk.Ikindi);
        $('.vakit_bilgi.aksam').text(ilk.Aksam);
        $('.vakit_bilgi.yatsi').text(ilk.Yatsi);
        $('.tarih').text(ilk.MiladiTarihUzun + " / " + ilk.HicriTarihUzun);
    }
    var datac = sessionStorage.getItem('ilkv') && JSON.parse(sessionStorage.getItem('ilkv'));
    if (datac && (new Date(datac.MiladiTarihUzunIso8601)).getDate() == (new Date()).getDate()) {
        goster(datac);
    } else {
        $.getJSON('https://ezanvakti.herokuapp.com/vakitler?ilce=9206', function (data) {
            var ilk = data[0];
            sessionStorage.setItem('ilkv', JSON.stringify(ilk));
            goster(ilk);
        });
    }
});