/*Lazylaod插件，适用于jQuery和Zepto*/
/*author:chukuang(paoloo1995)*/

;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        if (window.jQuery) {
            define(['jquery'], factory)
        } else if (window.Zepto) {
            define(['zepto'], factory)
        }
    } else {
        factory(window.jQuery || window.Zepto)
    }
})(function($, undefined) {
    var w = window;

    function isInSight(element) {
        var elementTop = element.getBoundingClientRect().top,
            elementBottom = element.getBoundingClientRect().bottom,
            viewHeight = document.documentElement.clientHeight,
            elementHeight = element.scrollHeight;

        if ((elementBottom < 0) || (elementTop > viewHeight + elementHeight)) {
            return false;
        } else {
            return true;
        }
    }

    function throttle(method, args) {
        var delay = 200;
        clearTimeout(method.id);
        method.id = setTimeout(function() {
            method(args);
        }, delay);
    }

    function load($elements) {
        $elements.each(function(index, item) {
            var $item = $(item)
            if (!$item.data('src') || ($item.data('load-status') === 'already')) {
                return;
            } else if (isInSight(item)) {
                $item.attr('src', $item.data('src'));
                $item.attr('load-status', 'already');
                return;
            }
        });
    }

    if (!$.fn.hasOwnProperty('lazyload')) {
        $.fn.lazyload = function() {
            var $elements = this;
            load($elements);

            $(w).on('resize', function() {
                throttle(load, $elements);
            });

            $(w).on('scroll', function() {
                throttle(load, $elements);
            })
            return this;
        }
    }

})