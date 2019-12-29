jQuery(document).ready(function(a){"use strict";if("undefined"==typeof yith_wccl_general)return!1;var b=[],c="";a.fn.yith_wccl_select=function(b,c){var h=a(this),i=decodeURIComponent(h.attr("name")),j=b[i],k=void 0!==j?j.type:h.data("type"),l=void 0!==j&&j.terms,m=h.parent().find(".select_box"),n=[];h.addClass("yith_wccl_custom").hide(),h.closest(".select-wrapper").addClass("yith_wccl_is_custom"),m.length&&yith_wccl_general.grey_out||(m.remove(),m=a("<div />",{class:"select_box_"+k+" select_box "+h.attr("name")}).insertAfter(h)),h.find("option").each(function(){var b=a(this).val();if(l&&void 0!==l[b]||a(this).data("value")){n.push(b);var i="select_option_"+k+" select_option",j=l&&void 0!==l[b]?l[b].value:a(this).data("value"),o=l&&void 0!==l[b]?l[b].tooltip:a(this).data("tooltip"),p=a(this),q=m.find('[data-value="'+b+'"]');q.length||(b==h.val()&&(i+=" selected"),q=a("<div/>",{class:i,"data-value":b}).appendTo(m),q.on("click",function(b){if(a(this).hasClass("inactive")){var f=h.data("attribute_name")||h.attr("name");d(c,a(this).data("value"),f)?h.val("").change():e(c,!1,[])}a(this).hasClass("selected")?h.val("").change():h.val(p.val()).change(),g(a(this))}),"colorpicker"==k?(j=j.split(","),1==j.length?q.append(a("<span/>",{class:"yith_wccl_value",css:{background:j}})):(q.append(a('<span class="yith_wccl_value"><span class="yith-wccl-bicolor"/></span>')),q.find(".yith-wccl-bicolor").css({"border-bottom-color":j[0],"border-left-color":j[1]}))):"image"==k?q.append(a("<img/>",{class:"yith_wccl_value",src:j})):"label"==k&&q.append(a("<span/>",{class:"yith_wccl_value",text:j})),yith_wccl_general.tooltip&&void 0!==o&&""!=o&&("image"==k&&-1!=o.indexOf("{show_image}")&&(o=o.replace("{show_image}",'<img src="'+j+'" />')),f(q,o)))}}),m.children().each(function(){var b=a(this).data("value")+"";"-1"==a.inArray(b,n)?a(this).addClass("inactive"):a(this).removeClass("inactive")})};var d=function(b,c,d){var e=!1,f=b.data("product_variations"),g=b.find(".variations select"),h=[];a.each(g,function(){var b=a(this).data("attribute_name")||a(this).attr("name");h[b]=d==b?c:a(this).val()});for(var i=0;i<f.length;i++){var j=f[i];if(e)break;e=j;for(var k in j.attributes)if(j.attributes.hasOwnProperty(k)){var l=j.attributes[k],m=h[k];l!=m&&""!=l&&(e=!1)}}return e},e=function(a,b,c){var d=a.find(".variations select");1==d.length&&b?a.trigger("woocommerce_update_variation_values"):d.val(""),d.change(),b||(a.find("div.select_option").removeClass("selected inactive"),a.trigger("reset_data"))},f=function(b,c){var d=a('<span class="yith_wccl_tooltip"></span>'),e=yith_wccl_general.tooltip_pos+" "+yith_wccl_general.tooltip_ani;d.addClass(e),b.append(d.html("<span>"+c+"</span>"))},g=function(a){a.toggleClass("selected"),a.siblings().removeClass("selected")},h=function(b){b.preventDefault();var c=a(this),d=c.data("product_id"),e=c.data("quantity"),f=[],g=!1;b.data.select.each(function(a){f[a]=this.name+"="+this.value});try{g="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc")}catch(a){g=!1}a.ajax({url:yith_wccl_general.ajaxurl.toString().replace("%%endpoint%%","yith_wccl_add_to_cart"),type:"POST",data:{action:"yith_wccl_add_to_cart",product_id:d,variation_id:b.data.variation,attr:f.join("&"),quantity:e,context:"frontend"},beforeSend:function(){c.addClass("loading").removeClass("added")},success:function(b){return b.error&&b.product_url?void(window.location=b.product_url):yith_wccl_general.cart_redirect?void(window.location=yith_wccl_general.cart_url):(c.removeClass("loading").addClass("added"),c.next(".added_to_cart").length||c.after(' <a href="'+yith_wccl_general.cart_url+'" class="added_to_cart wc-forward" title="'+yith_wccl_general.view_cart+'">'+yith_wccl_general.view_cart+"</a>"),b.fragments&&a.each(b.fragments,function(b,c){a(b).replaceWith(c)}),g&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(b.fragments)),sessionStorage.setItem("wc_cart_hash",b.cart_hash)),a(document).trigger("wc_update_cart"),void a(document.body).trigger("added_to_cart",[b.fragments,b.cart_hash,c]))}})};a.yith_wccl=function(b){c=a(".variations_form.cart:not(.initialized), .owl-item.cloned .variations_form, form.cart.ywcp_form_loaded"),b="undefined"!=typeof yith_wccl?JSON.parse(yith_wccl.attributes):b,void 0===b&&(b=[]),c.each(function(){var c=a(this),f=c.find(".variations select"),g=!1,i=!1,j=c.closest(yith_wccl_general.wrapper_container_shop).length?c.closest(yith_wccl_general.wrapper_container_shop):c.closest(".product-add-to-cart"),k=j.find("img.wp-post-image"),l=k.attr("src"),m=k.attr("srcset"),n=j.find("span.price").clone().wrap("<p>").parent().html(),o=j.find("a.product_type_variable"),p=o.html(),q=j.find("input.thumbnail-quantity"),r=function(d,f){var g=d.length;d.each(function(){var d=decodeURIComponent(this.name),h=b[d],i=void 0!==h,k=a(this).data("type"),l=c.hasClass("initialized");if(--g,l||(f?a(this).attr("data-default_value",a(this).val()):a(this).val(a(this).data("default_value"))),i||k)if(f){if(!c.hasClass("in_loop")&&!j.length&&yith_wccl_general.description&&h.descr){var m=!!a(this).closest("tr").length,n=m?'<tr><td colspan="2">'+h.descr+"</td></tr>":'<p class="attribute_description">'+h.descr+"</p>";m?a(this).closest("tr").after(n):a(this).parent().append(n)}}else(i&&h.terms||k)&&a(this).yith_wccl_select(b,c);f&&!g&&e(c,!0,b),g||l||c.addClass("initialized")})},s=function(){t(!1),j.find("span.price").replaceWith(n),j.find(".ywccl_stock").remove(),q&&q.length&&q.hide(),o.html(p).off("click",h).removeClass("added").next(".added_to_cart").remove()},t=function(a){if(a){var b=a.image_src,c=a.image_srcset;b&&b.length&&k.attr("src",b),c&&c.length&&k.attr("srcset",c)}else k.attr("src",l),k.attr("srcset",m)};c.on("check_variations",function(a,b,c){if(!c){if(g)return void(g=!1);i&&(i=!1,s())}}),c.on("woocommerce_update_variation_values",function(){r(f,!1)}),c.on("found_variation",function(b,d){if(f.last().trigger("focusin"),c.hasClass("in_loop")){i&&s(),g=!0,i=!0;var e=d.price_html,k=d.variation_id;t(d),""!=e&&j.find("span.price").replaceWith(e),q&&q.length&&q.show(),d.is_in_stock&&(o.html(yith_wccl_general.add_cart),o.off("click").on("click",{variation:k,select:f},h)),j.find("span.price").after(a(d.availability_html).addClass("ywccl_stock")),a(document).trigger("ywccl_found_variation_in_loop",[d])}}),c.on("click",".reset_variations",function(){a(".select_option.selected").removeClass("selected")}),c.hasClass("in_loop")&&c.parent().on("change",function(a){a.stopPropagation()}),q&&q.length&&q.hide(),r(f,!0),1==f.length&&yith_wccl_general.image_hover&&c.find(".select_option").hover(function(){var b=a(this).attr("data-value"),e=f.attr("name"),g=d(c,b,e);a(this).hasClass("selected")||a(this).siblings().hasClass("selected")||g&&(c.hasClass("in_loop")?t(g):c.wc_variations_image_update(g))},function(){a(this).hasClass("selected")||a(this).siblings().hasClass("selected")||(c.hasClass("in_loop")?t(!1):c.wc_variations_image_update(!1))})})},a.yith_wccl(b),a(document).on("yith-wcan-ajax-filtered yith_infs_added_elem initialized.owl.carousel",function(){void 0!==a.yith_wccl&&void 0!==a.fn.wc_variation_form&&(a(document).find(".variations_form:not(.initialized), .owl-item.cloned .variations_form").each(function(){a(this).wc_variation_form()}),a.yith_wccl(b))}),a("body").on("quick-view-displayed",function(){var b=a(".pp_woocommerce_quick_view").find(".yith-wccl-data").data("attr");b&&a.yith_wccl(b)})});