var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
  if ( jQuery( this ).scrollTop() > navPos ) {
    console.log('aaaaaaaaaaaa');
    jQuery( '#global-nav' ).addClass( 'm_fixed' );
  } else {
    jQuery( 'nav' ).css( 'padding-top', 0 );
    jQuery( '#global-nav' ).removeClass( 'm_fixed' );
  }
});

jQuery( window ).on( 'scroll', function() {
  if ( 1000 < jQuery( this ).scrollTop() ) { // 1000px以上スクロールしたら
    jQuery( '#global-nav' ).addClass( 'm_fixed' );
  } else {
    jQuery( '#global-nav' ).removeClass( 'm_fixed' );
  }
});

