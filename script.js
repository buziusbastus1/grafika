const body = document.querySelector('body')

const modal = document.getElementById('myModal')
const modal1 = document.getElementById('myModal1')

const btn = document.getElementById('myBtn')
const btn1 = document.getElementById('myBtn1')

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0]
const span1 = document.getElementsByClassName('close1')[0]

btn.onclick = function () {
  modal.style.display = 'block'
  body.style.overflow = 'hidden'
}

btn1.onclick = function () {
  modal1.style.display = 'block'
  body.style.overflow = 'hidden'
}

span.onclick = function () {
  modal.style.display = 'none'
  body.style.overflow = 'auto'
}
span1.onclick = function () {
  modal1.style.display = 'none'
  body.style.overflow = 'auto'
}

const menu = [
  {
    id: 1,
    title: 'pokłon V',
    category: 'gipsoryt',
    img: './images/rysz/045-poklonV-min.jpg',
    anchor: './images/rysz/gips/045-poklonV-min.jpg'
  },
  {
    id: 2,
    title: 'początek VII',
    category: 'gipsoryt',
    img: './images/rysz/046poczatekVII-min.jpg',
    anchor: './images/rysz/gips/046poczatekVII-min.jpg'
  },
  {
    id: 3,
    title: 'pokłon VII',
    category: 'gipsoryt',
    img: './images/rysz/051poklonVII-min.jpg',
    anchor: './images/rysz/gips/051poklonVII-min.jpg'
  },
  {
    id: 4,
    title: 'drugie lato Mateusza',
    category: 'gipsoryt',
    img: './images/rysz/078drugielatoM-min.jpg',
    anchor: './images/rysz/gips/078drugielatoM-min.jpg'
  },
  {
    id: 5,
    title: 'znalezisko IV',
    category: 'gipsoryt',
    img: './images/rysz/079n-min.jpg',
    anchor: './images/rysz/gips/079n-min.jpg'
  },
  {
    id: 6,
    title: 'znalezisko I',
    category: 'gipsoryt',
    img: './images/rysz/082n-min.jpg',
    anchor: './images/rysz/gips/082n-min.jpg'
  },
  {
    id: 7,
    title: 'zalezisko V',
    category: 'gipsoryt',
    img: './images/rysz/083zaleziskoVn-min.jpg',
    anchor: './images/rysz/gips/083zaleziskoVn-min.jpg'
  },
  {
    id: 8,
    title: 'zbliżenie',
    category: 'gipsoryt',
    img: './images/rysz/084zblizenie-min.jpg',
    anchor: './images/rysz/gips/084zblizenie-min.jpg'
  },
  {
    id: 9,
    title: 'cisza',
    category: 'gipsoryt',
    img: './images/rysz/088ciszaduzy1-min.jpg',
    anchor: './images/rysz/gips/088ciszaduzy1-min.jpg'
  },
  {
    id: 10,
    title: 'skupienie',
    category: 'gipsoryt',
    img: './images/rysz/089skupienie-min.jpg',
    anchor: './images/rysz/gips/089skupienie-min.jpg'
  },
  {
    id: 11,
    title: 'szept szeptów',
    category: 'gipsoryt',
    img: './images/rysz/093szeptszetow-1-min.jpg',
    anchor: './images/rysz/gips/093szeptszetow-1-min.jpg'
  },
  {
    id: 12,
    title: 'opresja II',
    category: 'gipsoryt',
    img: './images/rysz/103opresja-min.jpg',
    anchor: './images/rysz/gips/103opresja-min.jpg'
  },
  {
    id: 13,
    title: 'fragment szeptu',
    category: 'gipsoryt',
    img: './images/rysz/094-min.jpg',
    anchor: './images/rysz/gips/094-min.jpg'
  },
  {
    id: 14,
    title: 'przedmiot poznania',
    category: 'gipsoryt',
    img: './images/rysz/124przedmiotpozn.jpg',
    anchor: './images/rysz/gips/124przedmiotpozn.jpg'
  },
  {
    id: 15,
    title: 'rzekome znikanie przedmiotu II',
    category: 'gipsoryt',
    img: './images/rysz/125rzekZnikPrzedmiotuII-min.jpg',
    anchor: './images/rysz/gips/125rzekZnikPrzedmiotuII-min.jpg'
  },
  {
    id: 16,
    title: 'wyodrębnienie sygnału VII',
    category: 'gipsoryt',
    img: './images/rysz/130WyodrSygnaluVI-min.jpg',
    anchor: './images/rysz/gips/130WyodrSygnaluVI-min.jpg'
  },
  {
    id: 17,
    title: 'dokonywanie wyboru',
    category: 'gipsoryt',
    img: './images/rysz/gips/132ndokonywaniewybory-min.jpg',
    anchor: './images/rysz/gips/132ndokonywaniewybory-min.jpg'
  },
  {
    id: 18,
    title: 'pozorna harmonia V',
    category: 'gipsoryt',
    img: './images/rysz/143pozornharV-min.jpg',
    anchor: './images/rysz/gips/143pozornharV-min.jpg'
  },
  {
    id: 19,
    title: 'pozorna harmonia VII',
    category: 'gipsoryt',
    img: './images/rysz/145pozornaharmoniaVII-min.jpg',
    anchor: './images/rysz/gips/145pozornaharmoniaVII-min.jpg'
  },
  {
    id: 20,
    title: 'urzeczywistnienie I',
    category: 'gipsoryt',
    img: './images/rysz/146urzeczywistnienieI-min.jpg',
    anchor: './images/rysz/gips/146urzeczywistnienieI-min.jpg'
  },
  {
    id: 21,
    title: 'urzeczywistnienie III',
    category: 'gipsoryt',
    img: './images/rysz/148nurzeczywistnienieI-min.jpg',
    anchor: './images/rysz/gips/148nurzeczywistnienieI-min.jpg'
  },
  {
    id: 22,
    title: 'upamiętnienie I',
    category: 'gipsoryt',
    img: './images/rysz/149upamietnienieI-min.jpg',
    anchor: './images/rysz/gips/149upamietnienieI-min.jpg'
  },
  {
    id: 23,
    title: 'powrót',
    category: 'cyfrowa',
    img: './images/rysz/151powrot-min(1).jpg',
    anchor: './images/rysz/fyf/151powrot-min.jpg'
  },
  {
    id: 24,
    title: 'inni',
    category: 'cyfrowa',
    img: './images/rysz/179inni-min.jpg',
    anchor: './images/rysz/fyf/179inni-min.jpg'
  },
  {
    id: 25,
    title: 'milczenie II',
    category: 'cyfrowa',
    img: './images/rysz/221milczenieII-min.jpg',
    anchor: './images/rysz/fyf/221milczenieII-min.jpg'
  },
  {
    id: 26,
    title: 'milczenie III',
    category: 'cyfrowa',
    img: './images/rysz/222milczenieIII-1-min.jpg',
    anchor: './images/rysz/fyf/222milczenieIII-1-min.jpg'
  },
  {
    id: 27,
    title: 'szepty IX',
    category: 'cyfrowa',
    img: './images/rysz/228szeptyIX-1-min.jpg',
    anchor: './images/rysz/fyf/228szeptyIX-1-min.jpg'
  },
  {
    id: 28,
    title: 'intencja II',
    category: 'cyfrowa',
    img: './images/rysz/229intencjaII-min.jpg',
    anchor: './images/rysz/fyf/229intencjaII-min.jpg'
  },
  {
    id: 29,
    title: 'oswięcimski Dzień Zaduszny II',
    category: 'cyfrowa',
    img: './images/rysz/240oswiecimskiDzienZadusznyII-min.jpg',
    anchor: './images/rysz/fyf/240oswiecimskiDzienZadusznyII-min.jpg'
  },
  {
    id: 30,
    title: 'oswięcimski Dzień Zaduszny III',
    category: 'cyfrowa',
    img: './images/rysz/241oswiecimskiDZIIIRGB-min.jpg',
    anchor: './images/rysz/fyf/241oswiecimskiDZIIIRGB-min.jpg'
  },
  {
    id: 31,
    title: 'wyodrębnienie sygnału IX',
    category: 'cyfrowa',
    img: './images/rysz/243wyodrSygnaluIX10-min.jpg',
    anchor: './images/rysz/fyf/243wyodrSygnaluIX10-min.jpg'
  },
  {
    id: 32,
    title: 'wyodrębnienie sygnału X',
    category: 'cyfrowa',
    img: './images/rysz/244wyodrSygnaluX10-min.jpg',
    anchor: './images/rysz/fyf/244wyodrSygnaluX10-min.jpg'
  },
  {
    id: 33,
    title: 'wyodrębnienie sygnału XI',
    category: 'cyfrowa',
    img: './images/rysz/245wyodrSygnaluXI-min.jpg',
    anchor: './images/rysz/fyf/245wyodrSygnaluXI-min.jpg'
  },
  {
    id: 34,
    title: 'wspólna pręga XV',
    category: 'cyfrowa',
    img: './images/rysz/fyf/291wspolnapregaXV-min.jpg',
    anchor: './images/rysz/fyf/291wspolnapregaXV-min.jpg'
  },
  {
    id: 35,
    title: 'oczyszczenie II',
    category: 'cyfrowa',
    img: './images/rysz/361oczyszczenieII-1-min.jpg',
    anchor: './images/rysz/fyf/361oczyszczenieII-1-min.jpg'
  },
  {
    id: 36,
    title: 'oczyszczenie III',
    category: 'cyfrowa',
    img: './images/rysz/362oczyszczenieIII-1-min.jpg',
    anchor: './images/rysz/fyf/362oczyszczenieIII-1-min.jpg'
  }
]
// get parent element
const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')
// display all items when page loads
window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems(menu)
  displayMenuButtons()
})

function diplayMenuItems (menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <a data-pswp-src=${item.anchor} data-pswp-width="1500"  data-pswp-height="2100">
          <img loading="auto" src=${item.img} alt="${item.title}" class="photo "  />
          </a>
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              
            </header>
           
          </div>
        </article>`
  })
  displayMenu = displayMenu.join('')
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu
}
function displayMenuButtons () {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category)
      }
      return values
    },
    ['wszystkie']
  )
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`
    })
    .join('')

  btnContainer.innerHTML = categoryBtns
  const filterBtns = btnContainer.querySelectorAll('.filter-btn')
  console.log(filterBtns)

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem
        }
        return false
      })
      if (category === 'wszystkie') {
        diplayMenuItems(menu)
      } else {
        diplayMenuItems(menuCategory)
      }
    })
  })
}

const menu1 = [
  {
    id: 1,
    title: 'sennik pomarańcze',
    category1: 'cyfrowa',
    img: './images/jad/38_sennikipomarancze.jpg',
    anchor: './images/jad/cyf/38_sennikipomarancze.jpg'
  },
  {
    id: 2,
    title: 'sennik i martwa natura',
    category1: 'cyfrowa',
    img: './images/jad/39_sennikimartwanatura.jpg',
    anchor: './images/jad/cyf/39_sennikimartwanatura.jpg'
  },
  {
    id: 3,
    title: 'klinika III',
    category1: 'cyfrowa',
    img: './images/jad/40_klinikaIII-1.jpg',
    anchor: './images/jad/cyf/40_klinikaIII-1.jpg'
  },
  {
    id: 4,
    title: 'wesele III',
    category1: 'cyfrowa',
    img: './images/jad/41_weseleIII.jpg',
    anchor: './images/jad/cyf/41_weseleIII.jpg'
  },
  {
    id: 5,
    title: 'dramatczna',
    category1: 'drzeworyt',
    img: './images/jad/09-dramatczna.jpg',
    anchor: './images/jad/drzewor/09-dramatczna.jpg'
  },
  {
    id: 6,
    title: 'przechodnie II',
    category1: 'drzeworyt',
    img: './images/jad/13przechodnieII.jpg',
    anchor: './images/jad/drzewor/13przechodnieII.jpg'
  },
  {
    id: 7,
    title: 'czarne i biale zamknięcia',
    category1: 'drzeworyt',
    img: './images/jad/14czarneibialezamknieia.jpg',
    anchor: './images/jad/drzewor/14czarneibialezamkniecia.jpg'
  },
  {
    id: 8,
    title: 'gra',
    category1: 'drzeworyt',
    img: './images/jad/20-gra.jpg',
    anchor: './images/jad/drzewor/20-gra.jpg'
  },
  {
    id: 9,
    title: 'akt',
    category1: 'drzeworyt',
    img: './images/jad/21-aktcol.jpg',
    anchor: './images/jad/drzewor/21-aktcol.jpg'
  },
  {
    id: 10,
    title: 'sennik i kreska',
    category1: 'drzeworyt',
    img: './images/jad/26-sennikIkreska.jpg',
    anchor: './images/jad/drzewor/26-sennikIkreska.jpg'
  },
  {
    id: 11,
    title: 'klinika II',
    category1: 'gipsoryt',
    img: './images/jad/30-klinikaII68.jpg',
    anchor: './images/jad/gipsor/30-klinikaII68.jpg'
  },
  {
    id: 12,
    title: 'odejścia III',
    category1: 'gipsoryt',
    img: './images/jad/31-odejsciaIII.jpg',
    anchor: './images/jad/gipsor/31-odejsciaIII.jpg'
  },
  {
    id: 13,
    title: 'bez powrotu',
    category1: 'gipsoryt',
    img: './images/jad/32-gone.jpg',
    anchor: './images/jad/gipsor/32-gone.jpg'
  },
  {
    id: 14,
    title: 'klinika IV',
    category1: 'gipsoryt',
    img: './images/jad/33-klinikaIV.jpg',
    anchor: './images/jad/gipsor/33-klinikaIV.jpg'
  },
  {
    id: 15,
    title: 'lewiatan',
    category1: 'gipsoryt',
    img: './images/jad/35-Lewiatangrey.jpg',
    anchor: './images/jad/gipsor/35-Lewiatangrey.jpg'
  },
  {
    id: 16,
    title: 'lunapark',
    category1: 'gipsoryt',
    img: './images/jad/36-Lunapark.jpg',
    anchor: './images/jad/gipsor/36-Lunapark.jpg'
  },
  {
    id: 17,
    title: 'groteska',
    category1: 'linoryt',
    img: './images/jad/01-groteska.jpg',
    anchor: './images/jad/linor/01-groteska.jpg'
  },
  {
    id: 18,
    title: 'żaloba',
    category1: 'linoryt',
    img: './images/jad/15-zaloba64.jpg',
    anchor: './images/jad/linor/15-zaloba64.jpg'
  },
  {
    id: 19,
    title: 'mocny',
    category1: 'linoryt',
    img: './images/jad/22-mocny.jpg',
    anchor: './images/jad/linor/22-mocny.jpg'
  },
  {
    id: 20,
    title: 'wesele',
    category1: 'linoryt',
    img: './images/jad/linor/24-wesele.jpg',
    anchor: './images/jad/linor/24-wesele.jpg'
  },
  {
    id: 21,
    title: 'klinika',
    category1: 'linoryt',
    img: './images/jad/28_klinikab&w.jpg',
    anchor: './images/jad/linor/28_klinikab&w.jpg'
  },
  {
    id: 22,
    title: 'Morfeusz',
    category1: 'linoryt',
    img: './images/jad/34-Morfeusz.jpg',
    anchor: './images/jad/linor/34-Morfeusz.jpg'
  },
  {
    id: 23,
    title: 'odejście II',
    category1: 'linoryt',
    img: './images/jad/odejscieII.jpg',
    anchor: './images/jad/linor/odejscieII.jpg'
  }
]
// get parent element
const sectionCenter1 = document.querySelector('.section-center1')
const btnContainer1 = document.querySelector('.btn-container1')
// display all items when page loads
window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems1(menu1)
  displayMenuButtons1()
})

function diplayMenuItems1 (menuItems1) {
  let displayMenu1 = menuItems1.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
    <a data-pswp-src=${item.anchor} data-pswp-width="1500"  data-pswp-height="2100">
          <img loading="auto" src=${item.img} alt="${item.title}" class="photo "  />
          </a>
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              
            </header>
           
          </div>
        </article>`
  })
  displayMenu1 = displayMenu1.join('')
  // console.log(displayMenu);

  sectionCenter1.innerHTML = displayMenu1
}
function displayMenuButtons1 () {
  const categories1 = menu1.reduce(
    function (values, item) {
      if (!values.includes(item.category1)) {
        values.push(item.category1)
      }
      return values
    },
    ['wszystkie']
  )
  const categoryBtns1 = categories1
    .map(function (category1) {
      return `<button type="button" class="filter-btn" data-id=${category1}>
          ${category1}
        </button>`
    })
    .join('')

  btnContainer1.innerHTML = categoryBtns1
  const filterBtns1 = btnContainer1.querySelectorAll('.filter-btn')
  console.log(filterBtns1)

  filterBtns1.forEach(function (btn1) {
    btn1.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset);
      const category1 = e.currentTarget.dataset.id
      const menuCategory1 = menu1.filter(function (menuItem1) {
        // console.log(menuItem.category);
        if (menuItem1.category1 === category1) {
          return menuItem1
        }
        return false
      })
      if (category1 === 'wszystkie') {
        diplayMenuItems1(menu1)
      } else {
        diplayMenuItems1(menuCategory1)
      }
    })
  })
}
