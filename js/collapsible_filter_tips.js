(function($) {
  Drupal.behaviors.collapsible_filter_tips = {
    attach: function (context, settings) {
      
      /*
       * Toggle collapsible class
       */
      $('.collapsible-filter-tips-wrapper .collapsible-filter-tips-wrapper-trigger').click(function(){
        $(this).toggleClass('opened');
        $(this).next('ul.tips').toggleClass('collapsed');
        return false;
      });
        
    }
  }
})(jQuery);