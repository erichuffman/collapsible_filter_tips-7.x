(function($) {
  Drupal.behaviors.collapsible_filter_tips = {
    attach: function (context, settings) {
      
      /*
       * Toggle collapsible class
       */
      $('.collapsible-filter-tips-wrapper .collapsible-filter-tips-wrapper-trigger').click(function(){
        $(this).toggleClass('opened');
        $('.collapsible-filter-tips-wrapper .tips').toggleClass('collapsed');
        return false;
      });
        
    }
  }
})(jQuery);