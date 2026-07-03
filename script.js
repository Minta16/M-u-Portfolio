const photos = [
  {
    id: 1,
    albumId: "album-natural",
    viAlbum: "Thiên nhiên",
    enAlbum: "Natural",
    viTitle: "Hàng cây Hàn Quốc",
    enTitle: "Korea's Trees",
    category: "natural",
    src: "./photo1.jpg",
  },
  {
    id: 2,
    albumId: "album-natural",
    viAlbum: "Thiên nhiên",
    enAlbum: "Natural",
    viTitle: "Hoa vàng hoàng hôn",
    enTitle: "Sunset Behind Yellow Flower",
    category: "natural",
    src: "./hoaloenang.jpg",
    albumOnly: true,
  },
  {
    id: 3,
    albumId: "album-natural",
    viAlbum: "Thiên nhiên",
    enAlbum: "Natural",
    viTitle: "Một ngàn bông hoa",
    enTitle: "A Thousand Flowers",
    category: "natural",
    src: "./hoaa74.jpg",
    albumOnly: true,
  },
  {
    id: 4,
    albumId: "album-travel-1",
    viAlbum: "Bộ ảnh du lịch",
    enAlbum: "Travel Album",
    viTitle: "Du lịch về nguồn",
    enTitle: "Heritage Trip",
    category: "travel",
    src: "./thy.jpg",
  },
  {
    id: 5,
    albumId: "album-travel-1",
    viAlbum: "Bộ ảnh du lịch",
    enAlbum: "Travel Album",
    viTitle: "Góc nghiêng trung cảnh",
    enTitle: "Medium Side Angle",
    category: "travel",
    src: "./nhan.jpg",
    albumOnly: true,
  },
  {
    id: 6,
    albumId: "album-travel-1",
    viAlbum: "Bộ ảnh du lịch",
    enAlbum: "Travel Album",
    viTitle: "Khoảnh khắc du lịch",
    enTitle: "Travel Moment",
    category: "travel",
    src: "./3nggoccayto.jpg",
    albumOnly: true,
  },
  {
    id: 7,
    albumId: "album-event-1",
    viAlbum: "Album sự kiện",
    enAlbum: "Event Album",
    viTitle: "Lễ tốt nghiệp 2025",
    enTitle: "Graduation Ceremony 2025",
    category: "event",
    src: "./photo3.jpg",
  },
  {
    id: 8,
    albumId: "album-event-1",
    viAlbum: "Album sự kiện",
    enAlbum: "Event Album",
    viTitle: "Chủ nhật Đỏ 2026",
    enTitle: "Red Sunday 2026",
    category: "event",
    src: "./CNĐ.jpg",
    albumOnly: true,
  },
  {
    id: 9,
    albumId: "album-event-1",
    viAlbum: "Album sự kiện",
    enAlbum: "Event Album",
    viTitle: "Báo cáo kết thúc môn - ĐH Sân Khấu Điện Ảnh",
    enTitle: "Final Course Report - Theater and Cinema University",
    category: "event",
    src: "./SKDA.jpg",
    albumOnly: true,
  },
  {
    id: 10,
    albumId: "album-street-1",
    viAlbum: "Đời thường",
    enAlbum: "Street Album",
    viTitle: "Trứng cầu Sài Gòn",
    enTitle: "Saigon Bridge Frame",
    category: "street",
    src: "./photo4.jpg",
  },
  {
    id: 11,
    albumId: "album-street-1",
    viAlbum: "Đời thường",
    enAlbum: "Street Album",
    viTitle: "Khung hình đô thị",
    enTitle: "Urban Frame",
    category: "street",
    src: "./CauBaSon.jpg",
    albumOnly: true,
  },
  {
    id: 12,
    albumId: "album-street-1",
    viAlbum: "Đời thường",
    enAlbum: "Street Album",
    viTitle: "Nhịp sống thành phố",
    enTitle: "City Lifestyle",
    category: "street",
    src: "./street1.jpg",
    albumOnly: true,
  },
  {
    id: 13,
    albumId: "album-sport-1",
    viAlbum: "Ảnh thể thao",
    enAlbum: "Sport Album",
    viTitle: "Ảnh thể thao",
    enTitle: "Sport Photograph",
    category: "sport",
    src: "./K18KL-20.JPG",
  },
  {
    id: 14,
    albumId: "album-sport-1",
    viAlbum: "Ảnh thể thao",
    enAlbum: "Sport Album",
    viTitle: "Pha tranh chấp",
    enTitle: "Challenge Moment",
    category: "sport",
    src: "./VHE-13.JPG",
    albumOnly: true,
  },
  {
    id: 15,
    albumId: "album-sport-1",
    viAlbum: "Ảnh thể thao",
    enAlbum: "Sport Album",
    viTitle: "Khoảnh khắc thi đấu",
    enTitle: "Match Moment",
    category: "sport",
    src: "./VHE-12.JPG",
    albumOnly: true,
  },
  {
    id: 16,
    albumId: "album-school-event-1",
    viAlbum: "Sự kiện cấp trường",
    enAlbum: "School Event Album",
    viTitle: "Ngày hội cấp trường",
    enTitle: "School Festival",
    category: "event",
    src: "./school-event1.jpg",
  },
  {
    id: 17,
    albumId: "album-school-event-1",
    viAlbum: "Sự kiện cấp trường",
    enAlbum: "School Event Album",
    viTitle: "Hoạt động sinh viên",
    enTitle: "Student Activity",
    category: "event",
    src: "./school-event2.jpg",
    albumOnly: true,
  },
  {
    id: 18,
    albumId: "album-school-event-1",
    viAlbum: "Sự kiện cấp trường",
    enAlbum: "School Event Album",
    viTitle: "Khoảnh khắc sân khấu",
    enTitle: "Stage Moment",
    category: "event",
    src: "./school-event3.jpg",
    albumOnly: true,
  },
];

const categoryKeys = ["all", "natural", "travel", "event", "street", "sport"];

const text = {
  vi: {
    nav: {
      about: "Giới thiệu",
      portfolio: "Portfolio",
      services: "Dịch vụ",
      contact: "Liên hệ",
    },

    categories: {
      all: "Tất cả",
      natural: "Thiên nhiên",
      travel: "Du lịch",
      event: "Sự kiện",
      street: "Đời thường",
      sport: "Thể thao",
    },

    heroEyebrow: "Portfolio nhiếp ảnh chuyên nghiệp",
    heroTitle1: "Ghi lại cảm xúc,",
    heroTitle2: "ánh sáng & câu chuyện vượt thời gian.",
    heroDesc:
      "Portfolio cá nhân dành cho nhiếp ảnh gia, phù hợp chụp sự kiện, chân dung, lifestyle và thương mại.",
    viewPortfolio: "Xem Portfolio",
    booking: "Liên hệ Booking",

    aboutSmall: "Giới thiệu",
    aboutTitle: "Người kể chuyện bằng hình ảnh",
    aboutName: "Xin chào, mình là Thiện Nhân.",
    aboutDesc:
      "Mình ghi lại những khoảnh khắc tự nhiên, cảm xúc thật. Portfolio này được thiết kế để thể hiện phong cách nhiếp ảnh chuyên nghiệp, hiện đại và có chiều sâu thị giác.",

    years: "Năm kinh nghiệm",
    clients: "Khách hàng hài lòng",
    events: "Sự kiện đã chụp",
    selectedWorks: "Dự án nổi bật",

    portfolioTitle: "Bộ sưu tập hình ảnh",
    viewImage: "Xem album",

    servicesSmall: "Dịch vụ",
    servicesTitle: "Mình chụp gì?",

    service1Title: "Chụp ảnh sự kiện",
    service1Desc:
      "Chụp sự kiện, hội thảo, workshop, sinh nhật và hoạt động truyền thông.",

    service2Title: "Chụp chân dung",
    service2Desc:
      "Chụp chân dung cá nhân, profile, tốt nghiệp, concept ngoài trời, sinh nhật và ảnh thương hiệu cá nhân.",

    service3Title: "Chụp thể thao",
    service3Desc:
      "Ghi lại khoảnh khắc nảy lửa của các pha tranh chấp thể thao.",

    contactSmall: "Cùng tạo nên những khung hình đẹp",
    contactTitle: "Đặt lịch chụp ngay hôm nay",
    contactBtn: "Liên hệ ngay",

    modalSmall: "Thông tin booking",
    modalTitle: "Liên hệ chụp ảnh",
    modalDesc:
      "Bạn có thể liên hệ mình để booking lịch chụp sự kiện, chân dung, couple, kỷ yếu hoặc ảnh cá nhân.",

    phone: "Số điện thoại",
    email: "Email",
    facebook: "Facebook",
    zalo: "Zalo",

    addHero: "THÊM ẢNH HERO",
    addAbout: "THÊM ẢNH GIỚI THIỆU",
    addPhoto: "THÊM ẢNH",
    photoCount: "ảnh",

    footer: "© 2026 ThienNhanPhoto.",
  },

  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact",
    },

    categories: {
      all: "All",
      natural: "Natural",
      travel: "Travel",
      event: "Event",
      street: "Street",
      sport: "Sport",
    },

    heroEyebrow: "Professional Photography Portfolio",
    heroTitle1: "Capturing emotions,",
    heroTitle2: "light & timeless stories.",
    heroDesc:
      "A personal portfolio for photographers, suitable for events, portraits, weddings, lifestyle and commercial photography.",
    viewPortfolio: "View Portfolio",
    booking: "Book a Shoot",

    aboutSmall: "About Me",
    aboutTitle: "Visual storyteller behind the lens",
    aboutName: "Hello, I’m Thien Nhan.",
    aboutDesc:
      "I capture natural moments, real emotions and beautiful light. This portfolio is designed to present a modern, professional and visually rich photography style.",

    years: "Years Experience",
    clients: "Happy Clients",
    events: "Events Covered",
    selectedWorks: "Selected Works",

    portfolioTitle: "Photography Portfolio",
    viewImage: "View Album",

    servicesSmall: "Services",
    servicesTitle: "What I Shoot",

    service1Title: "Event Photography",
    service1Desc:
      "Photography for events, conferences, workshops, birthdays, graduations and media activities.",

    service2Title: "Portrait Session",
    service2Desc:
      "Personal portraits, profile photos, lookbook concepts and personal branding images.",

    service3Title: "Sport Photography",
    service3Desc:
      "Capturing energetic moments from sports matches and competitions.",

    contactSmall: "Let’s create something beautiful",
    contactTitle: "Book a photoshoot today",
    contactBtn: "Contact Me",

    modalSmall: "Booking Contact",
    modalTitle: "Photography Booking",
    modalDesc:
      "You can contact me to book event, portrait, couple, graduation or personal photoshoots.",

    phone: "Phone",
    email: "Email",
    facebook: "Facebook",
    zalo: "Zalo",

    addHero: "ADD HERO PHOTO",
    addAbout: "ADD ABOUT PHOTO",
    addPhoto: "ADD PHOTO",
    photoCount: "photos",

    footer: "© 2026 NhanPhoto. All rights reserved.",
  },
};

let lang = "vi";
let activeCategory = "all";

const $ = (id) => document.getElementById(id);

const gallery = $("gallery");
const filterButtons = $("filterButtons");

const albumModal = $("albumModal");
const albumCategory = $("albumCategory");
const albumTitle = $("albumTitle");
const albumDesc = $("albumDesc");
const albumPhotoList = $("albumPhotoList");

const contactModal = $("contactModal");

const lightbox = $("lightbox");
const lightboxImg = $("lightboxImg");
const lightboxAlbum = $("lightboxAlbum");
const lightboxTitle = $("lightboxTitle");

const currentLang = $("currentLang");
const nextLang = $("nextLang");

function getPhotoTitle(photo) {
  return lang === "vi" ? photo.viTitle : photo.enTitle;
}

function getAlbumTitle(photo) {
  return lang === "vi" ? photo.viAlbum : photo.enAlbum;
}

function getAlbumCount(albumId) {
  return photos.filter((photo) => photo.albumId === albumId).length;
}

function getAlbumCards() {
  return photos
    .filter((photo) => !photo.albumOnly)
    .filter((photo, index, array) => {
      return index === array.findIndex((item) => item.albumId === photo.albumId);
    });
}

function translatePage() {
  const t = text[lang];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    let value = t;

    element.dataset.i18n.split(".").forEach((key) => {
      value = value[key];
    });

    element.textContent = value;
  });

  currentLang.textContent = lang === "vi" ? "VI" : "EN";
  nextLang.textContent = lang === "vi" ? "EN" : "VI";

  renderFilters();
  renderGallery();
}

function renderFilters() {
  const t = text[lang];

  filterButtons.innerHTML = "";

  categoryKeys.forEach((category) => {
    const button = document.createElement("button");

    button.textContent = t.categories[category];
    button.className = activeCategory === category ? "active" : "";

    button.onclick = () => {
      activeCategory = category;
      renderFilters();
      renderGallery();
    };

    filterButtons.appendChild(button);
  });
}

function renderGallery() {
  const t = text[lang];
  const cards = getAlbumCards();

  const filteredCards =
    activeCategory === "all"
      ? cards
      : cards.filter((photo) => photo.category === activeCategory);

  gallery.innerHTML = "";

  filteredCards.forEach((photo) => {
    const card = document.createElement("div");

    card.className = "photo-card album-card photo-placeholder reveal show";

    card.innerHTML = `
      <img src="${photo.src}" alt="${getAlbumTitle(photo)}">

      <div class="placeholder-text">
        ${t.addPhoto}
      </div>

      <div class="photo-overlay album-overlay">
        <p>${t.categories[photo.category]}</p>
        <h3>${getAlbumTitle(photo)}</h3>
        <span>
          ${getAlbumCount(photo.albumId)} ${t.photoCount} · ${t.viewImage}
        </span>
      </div>
    `;

    card.onclick = () => openAlbum(photo);

    gallery.appendChild(card);
  });
}

function openAlbum(photo) {
  const t = text[lang];
  const albumPhotos = photos.filter((item) => item.albumId === photo.albumId);

  albumCategory.textContent = t.categories[photo.category];
  albumTitle.textContent = getAlbumTitle(photo);

  albumDesc.textContent = `${albumPhotos.length} ${t.photoCount} · ${
    lang === "vi"
      ? "Danh sách ảnh trong album này."
      : "Photo list in this album."
  }`;

  albumPhotoList.innerHTML = "";

  albumPhotos.forEach((image) => {
    const item = document.createElement("div");

    item.className = "album-photo-item";

    item.innerHTML = `
      <div class="album-photo-img photo-placeholder">
        <img src="${image.src}" alt="${getPhotoTitle(image)}">

        <div class="placeholder-text">
          ${t.addPhoto}
        </div>
      </div>

      <div class="album-photo-info">
        <span>${getAlbumTitle(photo)}</span>
        <h3>${getPhotoTitle(image)}</h3>
      </div>
    `;

    item.onclick = () => openLightbox(image, getAlbumTitle(photo));

    albumPhotoList.appendChild(item);
  });

  albumModal.classList.remove("hidden");
}

function closeAlbum() {
  albumModal.classList.add("hidden");
}

function openLightbox(photo, album) {
  lightboxImg.src = photo.src;
  lightboxImg.alt = getPhotoTitle(photo);

  lightboxAlbum.textContent = album;
  lightboxTitle.textContent = getPhotoTitle(photo);

  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightboxImg.src = "";
}

function openContact() {
  contactModal.classList.remove("hidden");
}

function closeContact() {
  contactModal.classList.add("hidden");
}

function setupRevealEffect() {
  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  items.forEach((item) => observer.observe(item));
}

$("langToggle").onclick = () => {
  lang = lang === "vi" ? "en" : "vi";
  translatePage();
};

$("openContact").onclick = openContact;
$("closeContact").onclick = closeContact;

$("closeAlbum").onclick = closeAlbum;
$("closeLightbox").onclick = closeLightbox;

contactModal.onclick = (event) => {
  if (event.target === contactModal) {
    closeContact();
  }
};

albumModal.onclick = (event) => {
  if (event.target === albumModal) {
    closeAlbum();
  }
};

lightbox.onclick = (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
};

document.onkeydown = (event) => {
  if (event.key === "Escape") {
    closeContact();
    closeAlbum();
    closeLightbox();
  }
};

document.querySelectorAll("img").forEach((img) => {
  img.onerror = () => {
    img.style.display = "none";
  };
});

translatePage();
setupRevealEffect();
