const header = document.getElementById('js-header');
const checkBoxes = document.querySelectorAll('.toggle-checkbox');
const body = document.body;
const search = document.querySelector('.search-res-container');

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.add(savedTheme);

  if (savedTheme === 'dark') {
    body.classList.remove('light');
    body.classList.add('dark');
    if (body.classList.contains('home')) {
      search.classList.remove('light-theme-add');
      search.classList.add('dark-theme-add');
      categories.classList.remove('light-theme-add');
      categories.classList.add('dark-theme-add');
    }

    checkBoxes.forEach(el => (el.checked = true));
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
  }
}

header.addEventListener('click', ({ target }) => {
  if (target.name === 'switch-theme') {
    foo();
  }
});

function getConstants() {
  const pagPrev = document.querySelectorAll('.prev-button');
  const pagNext = document.querySelectorAll('.pag-page');
  const pagMove = document.querySelectorAll('.move-button');
  const pagMore = document.querySelector('.more-button');
  const pagActive = document.querySelector('.tui-is-selected');
  // const bullets = document.querySelectorAll('.swiper-pagination-bullet');
  return { pagPrev, pagNext, pagMove, pagMore, pagActive, bullets };
}

export function changeThemePagination() {
  const { pagPrev, pagNext, pagMove, pagMore, pagActive } = getConstants();

  if (savedTheme === 'dark') {
    pagPrev?.forEach(i => {
      i.classList.remove('pag-page-prev-light');
      i.classList.add('pag-page-prev-dark');
    }),
      pagNext?.forEach(i => {
        i.classList.remove('pag-page-next-light');
        i.classList.add('pag-page-next-dark');
      }),
      pagMove?.forEach(i => {
        i.classList.remove('pag-page-move-light');
        i.classList.add('pag-page-move-dark');
      }),
      pagMore?.classList.remove('pag-page-next-light');
    pagMore?.classList.add('pag-page-next-dark');
    pagActive?.classList.remove('pag-active-light');
    pagActive?.classList.add('pag-active-dark');
  } else {
    pagPrev?.forEach(i => {
      i.classList.remove('pag-page-prev-dark');
      i.classList.add('pag-page-prev-light');
    }),
      pagNext?.forEach(i => {
        i.classList.remove('pag-page-next-dark');
        i.classList.add('pag-page-next-light');
      }),
      pagMove?.forEach(i => {
        i.classList.remove('pag-page-move-dark');
        i.classList.add('pag-page-move-light');
      }),
      pagMore?.classList.remove('pag-page-next-dark');
    pagMore?.classList.add('pag-page-next-light');
    pagActive?.classList.remove('pag-active-dark');
    pagActive?.classList.add('pag-active-light');
  }

  header.addEventListener('click', ({ target }) => {
    if (target.name === 'switch-theme') {
    }
  });
}

export function changeSwiperPagTheme(arrBul) {
  const { bullets } = getConstants();

  if (savedTheme === 'dark') {
    bullets.forEach(i => {
      i.classList.add('swiper-bullet-dark-theme');
    });
  } else {
    bullets.forEach(i => {
      i.classList.remove('swiper-bullet-dark-theme');
    });
  }
}

function foo() {
  const { pagPrev, pagNext, pagMove, pagMore, pagActive, bullets } =
    getConstants();

  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    bullets.forEach(i => {
      i.classList.remove('swiper-bullet-dark-theme');
    });
    search?.classList.remove('dark-theme-add');
    search?.classList.add('light-theme-add');
    categories?.classList.remove('dark-theme-add');
    categories?.classList.add('light-theme-add');

    pagPrev?.forEach(i => {
      i.classList.remove('pag-page-prev-dark');
      i.classList.add('pag-page-prev-light');
    }),
      pagNext?.forEach(i => {
        i.classList.remove('pag-page-next-dark');
        i.classList.add('pag-page-next-light');
      }),
      pagMove?.forEach(i => {
        i.classList.remove('pag-page-move-dark');
        i.classList.add('pag-page-move-light');
      }),
      pagMore?.classList.remove('pag-page-next-dark');
    pagMore?.classList.add('pag-page-next-light');
    pagActive?.classList.remove('pag-active-dark');
    pagActive?.classList.add('pag-active-ligth');

    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    bullets.forEach(i => {
      i.classList.add('swiper-bullet-dark-theme');
    });
    search?.classList.remove('light-theme-add');
    search?.classList.add('dark-theme-add');
    categories?.classList.remove('light-theme-add');
    categories?.classList.add('dark-theme-add');
    pagPrev?.forEach(i => {
      i.classList.remove('pag-page-prev-light');
      i.classList.add('pag-page-prev-dark');
    }),
      pagNext?.forEach(i => {
        i.classList.remove('pag-page-next-light');
        i.classList.add('pag-page-next-dark');
      }),
      pagMove?.forEach(i => {
        i.classList.remove('pag-page-move-light');
        i.classList.add('pag-page-move-dark');
      }),
      pagMore?.classList.remove('pag-page-next-light');
    pagMore?.classList.add('pag-page-next-dark');
    pagActive?.classList.remove('pag-active-light');
    pagActive?.classList.add('pag-active-dark');

    localStorage.setItem('theme', 'dark');
  }
}
