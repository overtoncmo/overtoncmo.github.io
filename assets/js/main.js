/**
* Template Name: Restaurantly - v3.2.0
* Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  let recipes = {
    "Old Fashioned":"2 ounces whiskey\n1 sugar cube\n3 dashes Angostura bitters\nGarnish: orange peel\n\nMuddle sugar and bitters in the glass, adding 1 tsp water if needed. Add whiskey, and slowly lower large ice cube into the glass. Stir until combined, and garnish with orange peel.",
    "Tom Collins":"2 ounces gin\n1 ounce lemon juice\n3/4 ounce simple syrup\n2 ounces seltzer\nGarnish: orange wheel, cherry\n\nPour seltzer into collins glass. Short shake remaining ingredients with ice. Pour over seltzer. Fill glass with cube ice, garnish, and serve with straw.",
    "Margarita":"2 ounces tequila\n1 ounce lime juice\n1/2 ounce Cointreau\n1/2 ounce agave\nGarnish: salt, lime wedge\n\nSalt rim, if desired. Fill glass with ice. Shake all ingredients, and pour over ice. Garnish with lime, optional sprinkle of salt.",
    "Mojito":"2 ounces rum\n8-10 mint leaves\n1 ounce lime juice\n1 sugar cube\n3/4 ounce simple syrup\n2 ounces cold seltzer (optional)\nCrushed ice\nGarnish: mint sprig\n\nMuddle mint with sugar and simple syrup in the shaker. Add remaining ingredients except seltzer and short shake with crushed ice. Dump into a collins glass, fill with crushed ice, and swizzle briefly. Add seltzer if desired. Garnish with a mint sprig, and serve with a straw.",
    "Knickerbocker":"2 ounces rum\n1 ounce lime juice\n1/2 ounce raspberry syrup\n1/2 ounce Cointreau\n\nCombine all ingredients in shaker. Whip shake with crushed ice. Serve over crushed ice, garnish seasonal fruit and berries.",
    "Tequila Sunrise":"2 ounces tequila\n4 ounces orange juice\n1/4 ounce lime juice\n1/4 ounce grenadine\nGarnish: orange half wheel and lime wedge\n\nCombine tequila, orange juice, lime juice, and 3 ice cubes in a highball glass. Stir for 3 seconds. Add grenadine and don't stir. Garnish with orange half wheel and lime.",
    "Gin and Tonic":"2 ounces gin\n4 ounces cold tonic water\nGarnish: lime wedge\n\nPour gin into highball glass, add 3 ice cubes. Stir 3 seconds. Add tonic water and stir once. Garnish with lime.",
    "Daiquiri":"2 ounces rum\n3/4 ounce lime juice\n3/4 ounce simple syrup\nGarnish: lime wedge\n\nShake all ingredients with ice. Strain into chilled coupe. Garnish with lime.",
    "Gimlet":"2 ounces gin\n1 ounce lime juice\n3/4 ounce simple syrup\nGarnish: lime wedge\n\nShake all ingredients with ice. Strain into chilled coupe. Garnish with lime.",
    "Southside":"5 mint leaves\n2 ounces gin\n3/4 ounce lime juice\n3/4 ounce simple syrup\n 1 dash Angostura bitters\nGarnish: 1 mint leaf\n\nMuddle mint in a shaker. Add other ingredients and shake with ice. Strain into chilled coupe. Garnish with mint leaf.",
    "Bee's Knees":"2 ounce gin\n3/4 ounce lemon juice\n3/4 ounce honey syrup\n\nShake all ingredients with ice. Strain into a chilled coupe. No garnish.",
    "Whiskey Sour":"2 ounces whiskey\n3/4 ounce lemon juice\n3/4 ounce simple syrup\nGarnish: lemon wedge\n\nShake all ingredients with ice. Strain into double Old-Fashioned glass over 1 large ice cube. Garnish with lemon.",
    "Kentucky Maid":"5 mint leaves\n3 slices cucumber\n3/4 ounce simple syrup\n2 ounces bourbon\n1 ounce lime juice\nGarnish: mint sprig skewered through cucumber wheel\n\nMuddle mint, cucumber, and simple syrup in a shaker, making sure to break up cucumber skins. Add bourbon and lime juice. Shake with ice. Strain into a double Old-Fashioned glass over 1 large ice cube. Garnish with mint sprig skewered through a cucumber wheel.",
    "Brown Derby":"2 ounces bourbon\n1 ounce grapefruit juice\n1 bar spoon lemon juice\n1/2 ounce honey syrup\n\nShake all ingredients with ice. Strain into chilled coupe. No garnish.",
    "Moscow Mule":"2 ounces vodka\n2 ounces cold seltzer\n1/2 ounce lime juice\n3/4 ounce ginger syrup\nGarnish: lime wheel on glass, candied ginger on a skewer.\n\nPour seltzer into a collins glass. Short shake remaining ingredients with ice. Strain into the glass, and fill the glass with ice. Garnish with lime wheel and candied ginger.",
    "Grapefruit Collins":"2 ounces cold seltzer\n2 ounces gin\n1.5 ounces grapefruit juice\n1/2 ounce lemon juice\n 1/2 ounce simple syrup\n4 dashes Peychaud's bitters\nGarnish: grapefruit half wheel\n\nPour seltzer into a collins glass. Short shake remaining ingredients wiht ice. Strain into the glass, and fill the glass with ice. Garnish with grapefruit half wheel.",
    "Silver Fizz":"2 ounces gin\n3/4 ounce simple syrup\n3/4 ounce lemon juice\n1 egg white\n2 ounces cold seltzer\n\nDry shake all ingredients except seltzer, then shake again with ice. Double strain into a fizz glass. Slowly add seltzer, tapping bottom of glass on table to settle the foam. As you finish adding the seltzer, a white puck should form on the top of the drink. No garnish.",
    "Presbyterian":"2 ounces cold seltzer\n2 ounces rye\n1/2 ounce lemon juice\n1/2 ounce lime juice\n3/4 ounce ginger syrup\nGarnish: lime wedge\n\nPour the seltzer into a collins glass. Short shake the remaining ingredients with ice and strain into the glass. Fill the glass with ice cubes and garnish with the lime wedge.",
    "White Lady":"2 ounces gin\n1/2 ounce Cointreau\n3/4 ounce lemon juice\n1/4 ounce simple syrup\n1 egg white\nGarnish: lemon twist\n\nDry shake all ingredients, then shake again with ice. Double strain into a chilled coupe. Express lemon over the drink, and set on the edge of the glass.",
    "Why Not":"1.75 ounces bourbon\n1/2 ounce Cointreau\n3/4 ounce lemon juice\n1/2 ounce dark maple syrup\nGarnish: 1 sage leaf and lemon wheel\n\nShake all ingredients with ice and strain into a double Old-Fashioned glass filled with ice. Garnish with the sage leaf and lemon wheel.",
    "Cosmopolitan":"2 ounces vodka\n3/4 ounce Cointreau\n1/2 ounce lime juice\n1/2 ounce cranberry juice\n1/2 ounce simple syrup\nGarnish: lime wheel\n\nShake all ingredients with ice and double strain into a chilled coupe. Garnish with the lime wheel.",
    "Pegu Club Cocktail":"2 ounces gin\n3/4 ounce Cointreau\n3/4 ounce lime juice\n1 dash Angostura bitters\n1 dash orange bitters\nGarnish: lime wedge\n\nShake all ingredients with ice and double strain into a chilled coupe. Garnish with the lime wedge.",
    "Whiskey Highball":"2 ounces scotch\n6 ounces cold seltzer\nGarnish: lemon wedge\n\nPour the scotch into a highball glass and add 3 ice cubes. Stir for 3 seconds. Add the seltzer and stir once. Garnish with the lemon wedge.",
    "Cuba Libre":"2 ounces dark rum\n1/4 ounce lime juice\n4 ounces cold coke\nGarnish: lime wedge\n\nPour rum into a highball glass, and add 3 ice cubes. Stir for 3 seconds. Add the lime juice and coke and stir once. Garnish with the lime wedge.",
    "Paloma":"1.5 ounces tequila\n3/4 ounces lime juice\n1/2 ounce simple syrup\n4 ounces grapefruit soda\nGarnish: lime wheel\n\nShake all ingredients except grapefruit soda with ice. Fill a highball glass with ice and strain into the glass. Top with grapefruit soda and garnish with the lime wheel.",
    "Screwdriver":"2 ounces vodka\n4 ounces orange juice\nCitric acid solution, if needed\n\nOptional add citric acid to orange juice one drop at a time until the flavor is sweet with a tangy bite. Combine orange juice and vodka in a highball glass, and add 3 ice cubes. Stir for 3 seconds. No garnish.",
    "Gin-Gin Mule":"1.5 ounces gin\n3/4 ounce ginger syrup\n1/4 ounce simple syrup\n3/4 ounce lime juice\n6-8 mint leaves\n2 ounces soda water\nGarnish: mint sprig\n\nCombine all ingredients except soda in the shaker and muddle. Fill a highball glass with ice. Add ice to shaker and shake. Double strain into the glass and top up with soda water. Garnish with the mint sprig, and serve with a straw.",
    "Cinnamon Girl":"3 orange wedges\n2 ounces tequila\n1/4 ounce gold rum\n3/4 ounce lime juice\n3.4 ounce cinnamon syrup\n2 dashes orange bitters\nGarnish: orange wheel and cinnamon stick\n\nMuddle orange wedges in the shaker. Add remaining ingredients and shake wiht ice. Strain over crushed ice into a double Old-Fashioned glass. Garnish with the orange wheel and cinnamon stick.",
    "Mexican Firing Squad":"2 ounces tequila\n3/4 ounce grenadine\n3/4 ounce lime juice\n2 dashes Angostura bitters\n2 ounces soda water\nGarnish: orange twist\n\nShake all ingredients with ice. Strain into highball glass filled with ice cubes and top with soda water. Express orange twist over the drink and lay on the edge of the glass.",
    "Pink Lady":"2 ounces gin\n1 ounce lemon juice\n3/4 ounce grenadine\n1 egg white\n\nCombine all ingredients in a shaker and dry shake. Shake again wtih ice. Double strain into a chilled coupe. No garnish.",
    "Nor'easter":"2 ounces cold seltzer\n2 ounces dark rum\n3/4 ounce lime juice\n1 ounce ginger syrup\nGarnish: lime wheel and candied ginger on a skewer\n\nPour the seltzer into a collins glass. Short shake the remaining ingredients with ice and strain into the glass. Fill the glass with ice cubes and garnish with the lime wheel and candied ginger skewer.",
    "Queen's Park Swizzle":"2 ounces rum\n1 ounce lime juice\n3/4 ounce simple syrup\n1 sugar cube\n8-10 mint leaves\n4-8 dashes Angostura bitters\nGarnish: mint sprig\n\nCombine all ingredients except bitters in glass and muddle lightly. Fill the glass 3/4 full with crushed ice and swizzle until the glass is frosty. Top with more crushed ice and add bitters on the top over a bar spoon. Garnish with mint sprig and serve with a straw.",
    "Gin Fizz":"1.5 ounces gin\n3/4 ounce simple syrup\n3/4 ounce lemon juice\n1 egg white\n2-4 ounces soda water\n\nComine all ingredients in a shaker and dry shake. Shake again with ice and strain into a collins glass (no ice). Top with soda water.",
    "Gold Rush":"2 ounces bourbon\n3/4 ounce lemon juice\n3/4 ounce honey syrup\n\nShake all ingredients with ice. Strain over ice cubes into a double Old-Fashioned glass. No garnish.",
    "Fireman's Sour":"2 ounces rum\n1 ounce lime juice\n1/2 ounce grenadine\n1 egg white\nGarnish: lime wedge\n\nDry shake all ingredients, then shake again with ice. Strain over ice cubes into an Old-Fashioned glass. Garnish with the lime wedge.",
    "Planter's Punch":"2 ounces dark rum\n1 ounce lemon juice\n3/4 ounce simple syrup\n2-3 dashes Angostura bitters\nGarnish: pineapple wedge, mint sprig, and cherry\n\nCombine all ingredients in a highball glass, fill with crushed ice and stir. Garnish with the pineapple wedge, mint sprig, and cherry."


  }

  $('#recipe-modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var drink = button[0].innerHTML

  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(drink)
  if drink in recipes {
    modal.find('.modal-body').text(recipes[drink])
  } else {
    modal.find('.modal-body').text("Error: Recipe not found."))
  }

})


  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Menu isotope and filter
   */
  window.addEventListener('load', () => {
    let menuContainer = select('.menu-container');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });

      let menuFilters = select('#menu-flters li', true);

      on('click', '#menu-flters li', function(e) {
        e.preventDefault();
        menuFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        menuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        menuIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Events slider
   */
  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate gallery lightbox
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()
