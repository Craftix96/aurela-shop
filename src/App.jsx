import React, { useEffect, useState } from 'react';

export default function JewelryShop() {
  const products = [
    {
      id: 1,
      name: 'Ökologischer Kunststoff Ring',
      category: 'Ringe',
      ec: true,
      keywords: ['ring', 'kunsttstoff', 'classic'],
      price: '69.99€',
      image:
        'https://cdn03.plentymarkets.com/hfg4r0j3j0oq/item/images/1936/full/R45n.jpg.avif',
    },
    {
      id: 2,
      name: 'Edelstal Ring',
      category: 'Ringe',
      ec: true,
      keywords: ['edelstahl', 'ring', 'classic'],
      price: '94.99€',
      image:
        'https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt2a2edf7574abed2b/625686a97fff182317870103/8571-01.jpg',
    },
    {
      id: 3,
      name: 'Versilberter Ring',
      category: 'Ringe',
      ec: true,
      keywords: ['ring', 'silber', 'premium'],
      price: '119.99€',
      image:
        'https://monomania.de/cdn/shop/files/herren-ring-pure-edelstahl-pure-ohne.20170.1.jpg',
    },
    {
      id: 4,
      name: 'Vergoldeter Ring',
      category: 'Ringe',
      ec: true,
      keywords: ['ring', 'gold', 'premium'],
      price: '149.99€',
      image:
        'https://imgproxy.schmuckado.de/WBjoCedq-6FHdwPdPcqc4jfCayf_9knzZJZPDblN6vo/resize:fit:700:700/aHR0cHM6Ly93d3cuc2NobXVja2Fkby5kZS9tZWRpYS9jYXRhbG9nL3Byb2R1Y3QvMy81LzM1NV8yLmpwZz93aWR0aD03MDAmaGVpZ2h0PTcwMCZzdG9yZT1kZSZpbWFnZS10eXBlPWltYWdl.jpg',
    },
        {
      id: 5,
      name: 'Silber (925er) Ring',
      category: 'Ringe',
      ec: true,
      keywords: ['ring', 'silber', 'premium'],
      price: '449.99€',
      image:
        'https://www.religieux-saintchristophe.com/13211-thickbox_default/ring-alliance-silber-925er-silber.jpg',
    },
            {
      id: 6,
      name: 'Gold (585er/14k) Ring',
      category: 'Ringe',
      ec: true,
      keywords: ['ring', 'gold', 'premium'],
      price: '4499.99€',
      image:
        'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=1174&auto=format&fit=crop',
    },


      {
      id: 7,
      name: 'Ökologischer Kunststoff Armreif',
      category: 'Armreife',
      ec: true,
      keywords: ['armreif', 'kunsttstoff', 'classic'],
      price: '74.99€',
      image:
        'https://img.ltwebstatic.com/v4/j/spmp/2025/08/07/31/17545466988f07d4b49e026edea22a7eeec9bac284_thumbnail_405x.webp',
    },
    {
      id: 8,
      name: 'Edelstal Armreif',
      category: 'Armreife',
      ec: true,
      keywords: ['edelstahl', 'armreif', 'classic'],
      price: '99.99€',
      image:
        'https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt0a8e1db26223e7cf/672c9bb300336b3ed65f488e/33877-1.jpg',
    },
    {
      id: 9,
      name: 'Versilberter Armreif',
      category: 'Armreife',
      ec: true,
      keywords: ['armreif', 'silber', 'premium'],
      price: '129.99€',
      image:
        'https://www.my-jewellery.com/media/catalog/product/p/r/product_images-bold_bangle_chunky-_silver-_front.jpg',
    },
    {
      id: 10,
      name: 'Vergoldeter Armreif',
      category: 'Armreife',
      ec: true,
      keywords: ['armreif', 'gold', 'premium'],
      price: '169.99€',
      image:
        'https://cuffcph.com/cdn/shop/files/BlairBraceletSlimGold_f0c9feca-8df5-4c22-8a2a-7077306540ec.jpg',
    },
        {
      id: 11,
      name: 'Silber (925er) Armreif',
      category: 'Armreife',
      ec: true,
      keywords: ['armreif', 'silber', 'premium'],
      price: '499.99€',
      image:
        'https://cdn02.plentymarkets.com/803v7nzns6xn/item/images/19085/full/Armreif-925-Silber-glaenzend-oval-0.jpg',
    },
            {
      id: 12,
      name: 'Gold (585er/14k) Armreif',
      category: 'Armreife',
      ec: true,
      keywords: ['armreif', 'gold', 'premium'],
      price: '5199.99€',
      image:
        'https://www.goettgen.de/cdn/shop/files/DSJO48599.jpg',
    },



    // === PRODUKTE EINFACH HINZUFÜGEN ===
    // {
    //   id: 4,
    //   name: 'Neues Produkt',
    //   category: 'Ringe',
    //   ec: true,
    //   keywords: ['luxury', 'ring'],
    //   price: '99€',
    //   image: 'BILD_URL'
    // },

    // === ALTERNATIVE MIT LOKALEN BILDDATEIEN ===
    // Lege Bilder in:
    // public/images/
    // Beispiel:
    // public/images/ring1.jpg

    // {
    //   id: 5,
    //   name: 'Luxury Diamond Ring',
    //   category: 'Ringe',
    //   ec: true,
    //   keywords: ['diamond', 'luxury', 'ring'],
    //   price: '249€',
    //   image: '/images/ring1.jpg'
    // },

    // {
    //   id: 6,
    //   name: 'Silver Bracelet',
    //   category: 'Armbänder',
    //   ec: false,
    //   keywords: ['silver', 'bracelet'],
    //   price: '89€',
    //   image: '/images/bracelet1.jpg'
    // },
  ];

  const [page, setPage] = useState('home');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Alle');
  const [cart, setCart] = useState([]);
  const [slide, setSlide] = useState(0);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const totalPrice = cart.reduce((sum, item) => {
  return sum + Number(item.price.replace('€', ''));
}, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % products.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [products.length]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const clearCart = () => {
  setCart([]); // Setzt den State auf ein leeres Array zurück
};

  const filteredProducts = products.filter((product) => {
    const keywordMatch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.keywords.some((k) =>
        k.toLowerCase().includes(search.toLowerCase())
      );

    const categoryMatch =
      category === 'Alle' || product.category === category;

    return keywordMatch && categoryMatch;
  });

  const navButton =
    'hover:text-gray-300 transition duration-300 cursor-pointer';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-900 font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-300 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 p-5">
          <h1 className="text-2xl font-bold tracking-[0.3em] text-gray-700">
            <button onClick={() => setPage('home')} className={navButton}>
              Aurela
            </button>
          </h1>

          <nav className="flex flex-wrap justify-center gap-6 text-sm uppercase font-medium">
            <button onClick={() => setPage('home')} className={navButton}>
              Start
            </button>

            <button onClick={() => setPage('shop')} className={navButton}>
              Produkte
            </button>

            <button onClick={() => setPage('about')} className={navButton}>
              Über Uns
            </button>

            <button onClick={() => setPage('strategy')} className={navButton}>
              Strategie
            </button>

            <button onClick={() => setPage('business')} className={navButton}>
              Business
            </button>

            <button onClick={() => setPage('contact')} className={navButton}>
              Kontakt
            </button>
          </nav>

          <button
            onClick={() => setPage('cart')}
            className="bg-gray-900 text-white px-4 py-2 rounded-full hover:scale-105 transition"
          >
            Warenkorb ({cart.length})
          </button>
        </div>
      </header>

      {/* HOME */}
      {page === 'home' && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="uppercase tracking-[0.4em] text-gray-500 text-sm">
                White • Gold • Silver
              </p>

              <h2 className="text-4xl md:text-6xl font-light leading-tight text-gray-800">
                Moderner Schmuck mit elegantem Design
              </h2>

              <p className="text-gray-600 text-lg">
                Hochwertige Schmuckstücke mit cleanem Luxus-Design
                die eine Bezahlfunktion haben.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setPage('shop')}
                  className="bg-gray-900 text-white px-6 py-3 rounded-full hover:scale-105 transition"
                >
                  Jetzt shoppen
                </button>

                <button
                  onClick={() => setPage('shop')}
                  className="border border-gray-400 px-6 py-3 rounded-full hover:bg-white transition"
                >
                  Kollektion ansehen
                </button>
              </div>
            </div>

            {/* SLIDESHOW */}
            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl bg-white">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    slide === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                    <h3 className="text-3xl font-light">{product.name}</h3>
                    <p className="mt-2">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SHOP */}
      {page === 'shop' && (
        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-10">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800">
              Produktübersicht
            </h2>

            <div className="flex flex-wrap gap-3">
              <input
                type="text"
                placeholder="Suche nach Keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 bg-white w-[250px]"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 bg-white"
              >
                <option>Alle</option>
                <option>Ringe</option>
                <option>Armreife</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white p-10 rounded-[30px] shadow text-center text-gray-500">
              Keine Produkte gefunden.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[320px] w-full object-cover"
                  />

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="text-2xl font-light text-gray-800">
                        {product.name}
                      </h3>

                      <span className="text-xl font-semibold whitespace-nowrap">
                        {product.price}
                      </span>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {product.category}
                      </span>

                      <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm">
                        {product.ec ? 'EC Funktion' : 'Ohne EC'}
                      </span>
                    </div>

                    <div className="flex gap-3 pt-3">
                     <button
                        onClick={() => {
                          setCheckoutProduct(product);
                          setPage('checkout');
                          setPaymentMethod(null);
                        }}
                       className="flex-1 bg-gray-900 text-white py-3 rounded-full hover:scale-105 transition">
                        Kaufen
                      </button>

                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 border border-gray-400 py-3 rounded-full hover:bg-gray-100 transition"
                      >
                        In Warenkorb
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

     {/* CART */}
      {page === 'cart' && (
        <section className="p-10">
          <h2 className="text-3xl mb-5">Warenkorb</h2>

          {cart.map((item, i) => (
            <div key={i} className="flex justify-between bg-white p-3 mb-2 rounded">
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(i)}>Entfernen</button>
            </div>
          ))}

          {cart.length > 0 && (
            <button
              onClick={() => {
                setCheckoutProduct(null);
                setPaymentMethod(null);
                setPage('checkout');
              }}
              className="mt-5 bg-black text-white p-3 w-full rounded"
            >
              Den Ganzen Warenkorb kaufen
            </button>
          )}
        </section>
      )}
{/* ABOUT + SUBPAGES */}
{(page === 'about' ||
  page === 'vision' ||
  page === 'leitidee' ||
  page === 'ziele' ||
  page === 'partner') && (

  <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">

    {/* INTERAKTIVE GRAFIK */}
    <div className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-[45px] h-[620px] shadow-2xl overflow-hidden border border-white/40">

      {/* Hintergrund Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-10 w-80 h-80 bg-white/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-gray-400/20 rounded-full blur-3xl" />
      </div>

      {/* Linien */}
      <div className="absolute top-[170px] left-1/2 -translate-x-1/2 w-[2px] h-[280px] bg-gray-400" />

      <div className="absolute top-1/2 left-[230px] right-[230px] h-[2px] bg-gray-400 -translate-y-1/2" />
{/* ZURÜCK ZU ÜBER UNS */}
<button
  onClick={() => setPage('about')}
  className={`
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[180px]
    h-[70px]
    rounded-full
    border-[3px]
    text-xl
    font-semibold
    transition-all
    duration-300
    backdrop-blur-xl
    shadow-2xl
    hover:scale-110
    z-20
    ${
      page === 'about'
        ? 'bg-gray-900 text-white border-gray-900 scale-110'
        : 'bg-black/80 text-white border-white/40 hover:bg-black'
    }
  `}
>
  Über Uns
</button>
      {/* VISION */}
      <button
        onClick={() => setPage('vision')}
        className={`
          absolute
          top-12
          left-1/2
          -translate-x-1/2
          w-[240px]
          h-[90px]
          rounded-full
          border-[3px]
          text-3xl
          font-semibold
          transition-all
          duration-300
          backdrop-blur-xl
          shadow-xl
          hover:scale-110
          ${
            page === 'vision'
              ? 'bg-gray-900 text-white border-gray-900 scale-110'
              : 'bg-white/70 text-gray-800 border-white hover:bg-white'
          }
        `}
      >
        Vision
      </button>

      {/* ZIELE */}
      <button
        onClick={() => setPage('ziele')}
        className={`
          absolute
          top-1/2
          left-10
          -translate-y-1/2
          w-[240px]
          h-[90px]
          rounded-full
          border-[3px]
          text-3xl
          font-semibold
          transition-all
          duration-300
          backdrop-blur-xl
          shadow-xl
          hover:scale-110
          ${
            page === 'ziele'
              ? 'bg-gray-900 text-white border-gray-900 scale-110'
              : 'bg-white/70 text-gray-800 border-white hover:bg-white'
          }
        `}
      >
        Ziele
      </button>

      {/* LEITIDEE */}
      <button
        onClick={() => setPage('leitidee')}
        className={`
          absolute
          top-1/2
          right-10
          -translate-y-1/2
          w-[240px]
          h-[90px]
          rounded-full
          border-[3px]
          text-3xl
          font-semibold
          transition-all
          duration-300
          backdrop-blur-xl
          shadow-xl
          hover:scale-110
          ${
            page === 'leitidee'
              ? 'bg-gray-900 text-white border-gray-900 scale-110'
              : 'bg-white/70 text-gray-800 border-white hover:bg-white'
          }
        `}
      >
        Leitidee
      </button>

      {/* PARTNER */}
      <button
        onClick={() => setPage('partner')}
        className={`
          absolute
          bottom-12
          left-1/2
          -translate-x-1/2
          w-[240px]
          h-[90px]
          rounded-full
          border-[3px]
          text-3xl
          font-semibold
          transition-all
          duration-300
          backdrop-blur-xl
          shadow-xl
          hover:scale-110
          ${
            page === 'partner'
              ? 'bg-gray-900 text-white border-gray-900 scale-110'
              : 'bg-white/70 text-gray-800 border-white hover:bg-white'
          }
        `}
      >
        Partner
      </button>
    </div>

    {/* ABOUT */}
    {page === 'about' && (
      <div className="bg-white p-10 rounded-[35px] shadow-lg">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-700">
          Wer sind wir?
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Wir sind Anton, Florian, Lukas, Mae und Selina – fünf Köpfe,
          eine Vision. Gemeinsam haben wir ein Unternehmen gegründet,
          das zwei Welten vereint:
          handwerkliche Schmuckkunst und smarte Technologie.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Uns verbindet die Überzeugung, dass Luxus nicht laut sein muss.
          Dass wahre Eleganz in der Reduktion liegt.
        </p>
      </div>
    )}

    {/* VISION */}
    {page === 'vision' && (
      <div className="bg-white p-10 rounded-[35px] shadow-lg">
        <h2 className="text-5xl font-light mb-8 text-gray-800">
          Unsere Vision
        </h2>

        <p className="text-lg leading-relaxed text-gray-600 whitespace-pre-line">
          Unser Produkt verbindet eine gute Alternative zu herkömmlichen bezahl-
Methoden wie Ec Karten oder Bezahlen per Handy mit einem Einzigartigen
design als auch einer Ökologischen und Nachhaltigen Herstellung. Wir
wollen eine Welt des Kontaktlosen Bezahlens schaffen, in der ein tägliches
Objekt wie Schmuck schon zum Versorgen für den Tag reicht. Keine Ec
Karte oder Brieftasche muss mehr mitgeführt werden. Unsere schlichten
Designs als auch die Top Modelle übertreffen den bisherigen Markt in Preis
und Qualität. Bei Besonderen Wünschen stehen wir stets für den Kunden
ein damit dies ein Einmaliges Erlebnis wird.
        </p>
      </div>
    )}

    {/* LEITIDEE */}
    {page === 'leitidee' && (
      <div className="bg-white p-10 rounded-[35px] shadow-lg">
        <h2 className="text-5xl font-light mb-8 text-gray-800">
          Unsere Leitidee
        </h2>

        <p className="text-lg leading-relaxed text-gray-600 whitespace-pre-line">
Unsere ersten Gedanken zu diesem Projekt war stets der Gesellschaft zu
helfen. Wir arbeiten stets daran nicht nur auf den Gewinn zu schauen
sondern die Umwelt als auch die Kundenzufriedenheit nie außer acht zu
lassen. Wir entwickeln uns stets weiter und dank der Freundlichen
Rezensionen die wir bisher erhalten haben streben wir stets jeden Tag
immer besser zu werden. Ob auch ihre Ideen in Zukunft Umgesetzt werden
hängt nicht von Zufall ab schreiben sie uns einfach eine Email oder
Rezension und wir Reflektieren und lenken unser Unternehmen in eine
Bessere Richtung.
        </p>
      </div>
    )}

    {/* ZIELE */}
    {page === 'ziele' && (
      <div className="bg-white p-10 rounded-[35px] shadow-lg">
        <h2 className="text-5xl font-light mb-8 text-gray-800">
          Unsere Ziele
        </h2>

        <p className="text-lg leading-relaxed text-gray-600 whitespace-pre-line">
          Die Zukunft unseres Unternehmens ist noch nicht in stein gemeißelt. Wir
streben stets eine Verbesserung des Vorherigen an. Eine Erweiterung
unserer Marke ins Ausland als auch die Expansion in ganz Deutschland
wird nur ein weiterer Schritt unseres Erfolges sein. Wir planen neue
Innovationen als auch Ideen die die Grundlage des Marktes verändern und
dem Endverbraucher als auch anderen Unternehmen Grundlegend zu
Seite stehen werden.
        </p>
      </div>
    )}

    {/* PARTNER */}
    {page === 'partner' && (
      <div className="bg-white p-10 rounded-[35px] shadow-lg">
        <h2 className="text-5xl font-light mb-8 text-gray-800">
          Unsere Partner
        </h2>

        <p className="text-lg leading-relaxed text-gray-600 whitespace-pre-line">
Unsere Partner sind Mastercard als auch Visa mit denen wir die
Technologie des Verbauten Chips entwickelt haben. Die Infrastruktur als
auch die Produktion der Chips haben wir diesen Firmen anvertraut. Wir
planen in Zukunft mit verschieden Banken und weiteren Partnern aus
verschiedenen Ländern Kooperationen einzugehen um die Funktion der
Technologie Weltweit zu sichern. Eine Ökologische Alternative zu 
Kunststoff haben wir uns mit der Partnerschaft mit Grafe GmbH & Co KG
 gesichert um die Höste qualität und nachhaltigkeit möglich zu erreichen.
        </p>
      </div>
    )}

    {/*BILDER*/}
    <div className="bg-white p-10 rounded-[35px] shadow-lg">
      <h2 className="text-4xl font-light mb-6 text-gray-800">
        Ceo Anton Werner
      </h2>
          <div>
      <img src="https://img.magnific.com/vektoren-premium/anonymitaetssymbol-benutzersilhouette-mit-fragezeichen-unbekannte-person_260216-260.jpg" alt="Beschreibung des Bildes" />
    </div>
    </div>

    <div className="bg-white p-10 rounded-[35px] shadow-lg">
      <h2 className="text-4xl font-light mb-6 text-gray-800">
        Ceo Florian Rocksien
      </h2>
          <div>
      <img src="https://img.magnific.com/vektoren-premium/anonymitaetssymbol-benutzersilhouette-mit-fragezeichen-unbekannte-person_260216-260.jpg" alt="Beschreibung des Bildes" />
    </div>
    </div>

    <div className="bg-white p-10 rounded-[35px] shadow-lg">
      <h2 className="text-4xl font-light mb-6 text-gray-800">
        Ceo Lukas Süssle
      </h2>
          <div>
      <img src="https://img.magnific.com/vektoren-premium/anonymitaetssymbol-benutzersilhouette-mit-fragezeichen-unbekannte-person_260216-260.jpg" alt="Beschreibung des Bildes" />
    </div>
    </div>

    <div className="bg-white p-10 rounded-[35px] shadow-lg">
      <h2 className="text-4xl font-light mb-6 text-gray-800">
        Ceo Mae Kohn
      </h2>
          <div>
      <img src="https://img.magnific.com/vektoren-premium/anonymitaetssymbol-benutzersilhouette-mit-fragezeichen-unbekannte-person_260216-260.jpg" alt="Beschreibung des Bildes" />
    </div>
    </div>

    <div className="bg-white p-10 rounded-[35px] shadow-lg">
      <h2 className="text-4xl font-light mb-6 text-gray-800">
        Ceo Selina Bootz
      </h2>
          <div>
      <img src="https://img.magnific.com/vektoren-premium/anonymitaetssymbol-benutzersilhouette-mit-fragezeichen-unbekannte-person_260216-260.jpg" alt="Beschreibung des Bildes" />
    </div>
    </div>

    {/* IMPRESSUM */}
    <div className="bg-white p-10 rounded-[35px] shadow-lg">
      <h2 className="text-4xl font-light mb-6 text-gray-800">
        Impressum
      </h2>

      <div className="space-y-3 text-gray-600">
        <p>Aurela GmbH</p>
        <p>Musterstraße 12</p>
        <p>24944 Flensburg</p>
        <p>Email: kontakt@Aurela.de</p>
        <p>Telefon: +49 123 456789</p>
      </div>
    </div>
  </section>
)}

{/* STRATEGIE SEITE */}
{page === 'strategy' && (
  <section className="max-w-7xl mx-auto px-6 py-16">

    {/* HEADER */}
    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.4em] text-gray-500 text-sm mb-4">
        Business • Vision • Zukunft
      </p>

      <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
        Unternehmensstrategie
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Unsere Vision verbindet Luxus, Technologie und Nachhaltigkeit
        zu einer modernen Zukunft des kontaktlosen Bezahlens.
      </p>
    </div>

    {/* STRATEGIE DIAGRAMM */}
    <div className="relative bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-[50px] p-10 min-h-[1100px] shadow-2xl overflow-hidden border border-white/40">

      {/* GLOW EFFEKTE */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl" />

      {/* VERBINDUNGSLINIEN */}
      <div className="absolute top-[210px] left-1/2 -translate-x-1/2 w-[2px] h-[90px] bg-gray-400" />

      <div className="absolute top-[340px] left-[30%] w-[20%] h-[2px] bg-gray-400 rotate-[25deg]" />

      <div className="absolute top-[340px] right-[30%] w-[20%] h-[2px] bg-gray-400 -rotate-[25deg]" />

      <div className="absolute top-[540px] left-1/2 -translate-x-1/2 w-[2px] h-[120px] bg-gray-400" />

      <div className="absolute top-[720px] left-[28%] w-[22%] h-[2px] bg-gray-400 rotate-[28deg]" />

      <div className="absolute top-[720px] right-[28%] w-[22%] h-[2px] bg-gray-400 -rotate-[28deg]" />

      {/* WERTE */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[380px] bg-white/80 backdrop-blur-xl rounded-[35px] p-8 shadow-2xl border border-white">

        <h3 className="text-4xl font-light text-gray-800 mb-6 text-center">
          Werte
        </h3>

        <ul className="space-y-3 text-gray-600 text-lg">
          <li>• Innovation durch Zukunftstechnologie</li>
          <li>• Sicherheit beim Bezahlen</li>
          <li>• Nachhaltigkeit</li>
          <li>• Einfachheit im Alltag</li>
          <li>• Stil und Individualität</li>
        </ul>
      </div>

      {/* VISION */}
      <div className="absolute top-[290px] left-8 w-[320px] bg-white/80 backdrop-blur-xl rounded-[35px] p-8 shadow-xl border border-white">

        <h3 className="text-3xl font-light text-gray-800 mb-4">
          Vision
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Wir verbinden Schmuck und Technologie
          zum Zahlungssystem der Zukunft.
        </p>
      </div>

      {/* UNTERNEHMENSZIELE */}
      <div className="absolute top-[290px] right-8 w-[360px] bg-white/80 backdrop-blur-xl rounded-[35px] p-8 shadow-xl border border-white">

        <h3 className="text-3xl font-light text-gray-800 mb-4">
          Unternehmensziele
        </h3>

        <ul className="space-y-2 text-gray-600">
          <li>• Online Shop eröffnen</li>
          <li>• Erste 1000 Kunden gewinnen</li>
          <li>• Marktposition aufbauen</li>
        </ul>
      </div>

      {/* GRUNDSTRATEGIE */}
      <div className="absolute top-[500px] left-1/2 -translate-x-1/2 w-[520px] bg-gray-900 text-white rounded-[40px] p-10 shadow-2xl">

        <h3 className="text-4xl font-light mb-6 text-center">
          Grundstrategie
        </h3>

        <ul className="space-y-3 text-lg text-gray-200">
          <li>• Verkauf auf Anfrage</li>
          <li>• Online-Shop und später eigener Standort</li>
          <li>• Zusammenarbeit mit Banken</li>
          <li>• Technologie und Schmuck vereinen</li>
        </ul>
      </div>

      {/* BUSINESSPLAN */}
      <div className="absolute bottom-10 left-8 w-[340px] bg-white/80 backdrop-blur-xl rounded-[35px] p-8 shadow-xl border border-white">

        <h3 className="text-3xl font-light text-gray-800 mb-4">
          Businessplan
        </h3>

        <ul className="space-y-2 text-gray-600">
          <li>• Finanzierung durch Eigenkapital</li>
          <li>• Marketing über Social Media</li>
          <li>• Einnahmen durch Schmuckverkauf</li>
        </ul>
      </div>

      {/* LEITIDEE */}
      <div className="absolute bottom-10 right-8 w-[360px] bg-white/80 backdrop-blur-xl rounded-[35px] p-8 shadow-xl border border-white">

        <h3 className="text-3xl font-light text-gray-800 mb-4">
          Leitidee
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>
            <span className="font-semibold text-gray-800">
              Ökonomisch:
            </span>{' '}
            Hochwertige Produkte profitabel verkaufen
          </li>

          <li>
            <span className="font-semibold text-gray-800">
              Ökologisch:
            </span>{' '}
            Weniger Plastik und nachhaltige Verpackungen
          </li>

          <li>
            <span className="font-semibold text-gray-800">
              Sozial:
            </span>{' '}
            Einfaches und sicheres Bezahlen für jeden
          </li>
        </ul>
      </div>
    </div>
  {/* ========================================= */}
{/* BUSINESS MODEL CANVAS */}
{/* ========================================= */}

<div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[50px] p-10 min-h-[1300px] shadow-2xl overflow-hidden border border-white/10 mt-20">

  {/* GLOW */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-500/10 rounded-full blur-3xl" />

  {/* HEADER */}
  <div className="text-center mb-16 relative z-10">
    <p className="uppercase tracking-[0.4em] text-gray-400 text-sm mb-4">
      Business Model
    </p>

    <h2 className="text-5xl font-light text-white mb-6">
      Geschäftsmodell
    </h2>

    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
      Verbindung von Luxus-Schmuck, moderner Zahlungstechnologie
      und nachhaltigem Design.
    </p>
  </div>

  {/* GRID */}
  <div className="grid lg:grid-cols-3 gap-8 relative z-10">

    {/* KUNDENNUTZUNG */}
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 shadow-2xl hover:scale-[1.02] transition">

      {/* MINI GRAFIK */}
      <div className="flex justify-center mb-8">
        <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-5xl">
          💎
        </div>
      </div>

      <h3 className="text-3xl font-light text-white mb-6">
        Kundennutzen
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Die Kombination aus modernster Bezahltechnologie und gutem Gewissen.
        Stilvoll, praktisch und umweltfreundlich.
      </p>
    </div>

    {/* KUNDENBEZIEHUNG */}
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 shadow-2xl hover:scale-[1.02] transition">

      <div className="flex justify-center mb-8">
        <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-5xl">
          🤝
        </div>
      </div>

      <h3 className="text-3xl font-light text-white mb-6">
        Kundenbeziehung
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Wir bieten unseren Kunden eine angenehme Atmosphäre,
        schnellen Support und eine starke Community.
        Transparente Nachhaltigkeit steht dabei im Mittelpunkt.
      </p>
    </div>

    {/* ZIELGRUPPE */}
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 shadow-2xl hover:scale-[1.02] transition">

      <div className="flex justify-center mb-8">
        <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-5xl">
          🎯
        </div>
      </div>

      <h3 className="text-3xl font-light text-white mb-6">
        Zielgruppe
      </h3>

      <ul className="space-y-3 text-gray-300 leading-relaxed">
        <li>• Festivalbesucher ohne Geldbörse</li>
        <li>• Fashion- und Luxusliebhaber</li>
        <li>• Technikaffine Kunden</li>
        <li>• Nachhaltigkeitsorientierte Käufer</li>
        <li>• Kunden mit Wunsch nach Komfort</li>
      </ul>
    </div>

    {/* VERTRIEBSKANÄLE */}
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 shadow-2xl hover:scale-[1.02] transition">

      <div className="flex justify-center mb-8">
        <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-5xl">
          🛍️
        </div>
      </div>

      <h3 className="text-3xl font-light text-white mb-6">
        Vertriebskanäle
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li>• Moderner Online-Shop</li>
        <li>• Eigener Store in Flensburg</li>
        <li>• Social Media Marketing</li>
        <li>• Kooperationen & Events</li>
      </ul>
    </div>

    {/* SCHLÜSSELPARTNER */}
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 shadow-2xl hover:scale-[1.02] transition">

      <div className="flex justify-center mb-8">
        <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-5xl">
          🌍
        </div>
      </div>

      <h3 className="text-3xl font-light text-white mb-6">
        Partnerschaften
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li>• Kooperation mit Mastercard</li>
        <li>• Zusammenarbeit mit Visa</li>
        <li>• Partnerschaft mit Grafe GmbH & Co. KG</li>
        <li>• Zusammenarbeit mit Banken</li>
      </ul>
    </div>

    {/* ERLÖSQUELLEN */}
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 shadow-2xl hover:scale-[1.02] transition">

      <div className="flex justify-center mb-8">
        <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-5xl">
          💰
        </div>
      </div>

      <h3 className="text-3xl font-light text-white mb-6">
        Erlösquellen
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li>• Verkauf von Schmuckstücken</li>
        <li>• Premium-Modelle</li>
        <li>• Individuelle Sonderanfertigungen</li>
        <li>• Personalisierungen</li>
      </ul>
    </div>
  </div>

  {/* UNTERE VERBINDUNGSGRAFIK */}
  <div className="relative mt-20 h-[250px]">

    {/* MITTELPUNKT */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[120px] rounded-[40px] bg-white text-gray-900 flex items-center justify-center text-3xl font-light shadow-2xl z-20">
      Aurela
    </div>

    {/* LINIEN */}
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/20" />

    <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-white/20" />

    {/* KREISE */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-4xl">
      💎
    </div>

    <div className="absolute bottom-0 left-[10%] w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-4xl">
      🌱
    </div>

    <div className="absolute bottom-0 right-[10%] w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-4xl">
      📲
    </div>
  </div>
</div>  
  </section>
)}



{/* ========================================= */}
{/* UNTERNEHMENSANALYSE / BUSINESS SEKTION */}
{/* ========================================= */}

{page === 'business' && (
  <section className="max-w-7xl mx-auto px-6 py-16 space-y-16">

    {/* HEADER */}
    <div className="text-center">
      <p className="uppercase tracking-[0.4em] text-gray-500 text-sm mb-4">
        Interne Unternehmensanalyse
      </p>

      <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
        Unternehmensstruktur & Planung
      </h2>

      <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
        Analyse der wirtschaftlichen Grundlagen, Standortfaktoren,
        Rechtsform, Vollmachten und Vertragsarten unseres Unternehmens.
      </p>
    </div>

    {/* ========================================= */}
    {/* STANDORTWAHL */}
    {/* ========================================= */}

    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">

      {/* GRAFIK */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black p-10">

        <h3 className="text-4xl font-light text-white text-center mb-12">
          Standortwahl: Flensburg
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {/* FLENSBURG */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] p-8 text-white hover:scale-105 transition">

            <div className="text-5xl mb-5">📍</div>

            <h4 className="text-3xl font-light mb-5">
              Flensburg
            </h4>

            <ul className="space-y-3 text-gray-200">
              <li>• Niedriger Gewerbesteuersatz</li>
              <li>• Günstigere Grundstückspreise</li>
              <li>• Niedrigeres Lohnniveau</li>
              <li>• Nähe zu Dänemark</li>
              <li>• Zugang zum skandinavischen Markt</li>
              <li>• Hohe Akzeptanz kontaktlosen Bezahlens</li>
            </ul>
          </div>

          {/* KIEL */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 text-white opacity-80">

            <div className="text-5xl mb-5">🏙️</div>

            <h4 className="text-3xl font-light mb-5">
              Kiel
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>• Höhere Gewerbesteuer</li>
              <li>• Höhere Mietkosten</li>
              <li>• Größerer Wettbewerb</li>
              <li>• Höhere Personalkosten</li>
              <li>• Größeres deutsches Einzugsgebiet</li>
            </ul>
          </div>

          {/* LÜBECK */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 text-white opacity-80">

            <div className="text-5xl mb-5">🌉</div>

            <h4 className="text-3xl font-light mb-5">
              Lübeck
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>• Höhere Standortkosten</li>
              <li>• Hohe Konkurrenz</li>
              <li>• Höhere Löhne</li>
              <li>• Gute Infrastruktur</li>
              <li>• Tourismusvorteile</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TEXT */}
      <div className="p-10">

        <p className="text-lg leading-relaxed text-gray-600 mb-8">
          Wir haben die Standorte Kiel, Lübeck und Flensburg verglichen.
          Dabei spielten wirtschaftliche Kostenfaktoren, Marktpotenziale,
          Steuern und Zukunftsmöglichkeiten eine entscheidende Rolle.
        </p>

        <p className="text-lg leading-relaxed text-gray-600 mb-8">
          Besonders wichtig war die Schonung unseres Startkapitals
          von insgesamt 100.000€, das durch fünf Gründer mit jeweils
          20.000€ eingebracht wird.
        </p>

        <p className="text-lg leading-relaxed text-gray-600">
          Flensburg bietet im Vergleich die geringsten Einstiegskosten,
          niedrigere Gewerbesteuern und gleichzeitig einen strategischen
          Vorteil durch die Nähe zu Dänemark und dem skandinavischen Markt.
          Dort ist kontaktloses Bezahlen deutlich stärker verbreitet
          als in Deutschland, wodurch unser Produkt optimal positioniert wird.
        </p>
      </div>
    </div>

    {/* ========================================= */}
    {/* GMBH */}
    {/* ========================================= */}

    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">

      {/* GRAFIK */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-10">

        <h3 className="text-4xl font-light text-gray-800 text-center mb-12">
          Rechtsform: GmbH
        </h3>

        <div className="grid lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-[30px] p-8 shadow-lg">
            <div className="text-4xl mb-4">💰</div>

            <h4 className="text-2xl font-light mb-4 text-gray-800">
              Kapital
            </h4>

            <p className="text-gray-600">
              25.000€ Mindestkapital.
              Unser Unternehmen startet mit 100.000€ Eigenkapital.
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-8 shadow-lg">
            <div className="text-4xl mb-4">🛡️</div>

            <h4 className="text-2xl font-light mb-4 text-gray-800">
              Haftung
            </h4>

            <p className="text-gray-600">
              Die Haftung beschränkt sich auf das Firmenvermögen.
              Privates Vermögen bleibt geschützt.
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-8 shadow-lg">
            <div className="text-4xl mb-4">📈</div>

            <h4 className="text-2xl font-light mb-4 text-gray-800">
              Vertrauen
            </h4>

            <p className="text-gray-600">
              Die GmbH wirkt professioneller gegenüber Banken,
              Partnern und Kunden.
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-8 shadow-lg">
            <div className="text-4xl mb-4">🤝</div>

            <h4 className="text-2xl font-light mb-4 text-gray-800">
              Wachstum
            </h4>

            <p className="text-gray-600">
              Gute Grundlage für spätere Investoren,
              Kooperationen und Expansion.
            </p>
          </div>
        </div>
      </div>

      {/* TEXT */}
      <div className="p-10">

        <h4 className="text-3xl font-light mb-6 text-gray-800">
          Warum wir uns für die GmbH entschieden haben
        </h4>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>• Schutz des privaten Vermögens</li>
              <li>• Professioneller Außenauftritt</li>
              <li>• Höheres Vertrauen bei Banken</li>
              <li>• Gute Rechtsgrundlage für Wachstum</li>
              <li>• Klare Unternehmensstruktur</li>
              <li>• Mehr Sicherheit bei wirtschaftlichen Risiken</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>• Einfachere Zusammenarbeit mit Partnern</li>
              <li>• Geeignet für Luxus- und Technologiebranche</li>
              <li>• Bessere Finanzierungsmöglichkeiten</li>
              <li>• Seriöseres Markenbild</li>
              <li>• Möglichkeit späterer Expansion</li>
              <li>• Langfristige Unternehmenssicherheit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* ========================================= */}
    {/* VOLLMACHTEN */}
    {/* ========================================= */}

    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">

      <div className="bg-gradient-to-r from-gray-900 to-black p-10">

        <h3 className="text-4xl font-light text-white text-center">
          Vollmachten im Unternehmen
        </h3>
      </div>

      <div className="p-10 grid lg:grid-cols-2 gap-10">

        {/* SINNVOLL */}
        <div className="bg-gray-100 rounded-[35px] p-8">

          <h4 className="text-3xl font-light mb-6 text-gray-800">
            Sinnvolle Vollmachten
          </h4>

          <ul className="space-y-5 text-gray-600 text-lg">

            <li>
              <span className="font-semibold text-gray-800">
                Handlungsvollmacht:
              </span>{' '}
              Sinnvoll für leitende Personen,
              die Bestellungen oder organisatorische Aufgaben übernehmen.
            </li>

            <li>
              <span className="font-semibold text-gray-800">
                Bankvollmacht:
              </span>{' '}
              Für Geschäftsführer sinnvoll,
              um Zahlungen und Geschäftskonten zu verwalten.
            </li>

            <li>
              <span className="font-semibold text-gray-800">
                Einkaufsvollmacht:
              </span>{' '}
              Für Material- und Schmuckbestellungen geeignet.
            </li>
          </ul>
        </div>

        {/* NICHT SINNVOLL */}
        <div className="bg-gray-900 rounded-[35px] p-8 text-white">

          <h4 className="text-3xl font-light mb-6">
            Nicht sinnvolle Vollmachten
          </h4>

          <ul className="space-y-5 text-gray-300 text-lg">

            <li>
              <span className="font-semibold text-white">
                Prokura:
              </span>{' '}
              Nicht sinnvoll für Produktionsmitarbeiter,
              da diese nur Maschinen bedienen und Schmuck fertigen.
            </li>

            <li>
              <span className="font-semibold text-white">
                Unbegrenzte Vertragsvollmachten:
              </span>{' '}
              Würden ein unnötiges wirtschaftliches Risiko darstellen.
            </li>

            <li>
              <span className="font-semibold text-white">
                Finanzvollmachten:
              </span>{' '}
              Sollten ausschließlich den Geschäftsführern vorbehalten bleiben.
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* ========================================= */}
    {/* VERTRAGSARTEN */}
    {/* ========================================= */}

    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">

      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-10">

        <h3 className="text-4xl font-light text-gray-800 text-center">
          Typische Vertragsarten
        </h3>
      </div>

      <div className="p-10 grid lg:grid-cols-2 gap-10">

        {/* KAUFVERTRAG */}
        <div className="bg-gray-100 rounded-[35px] p-8">

          <div className="text-5xl mb-5">🛒</div>

          <h4 className="text-3xl font-light mb-6 text-gray-800">
            Kaufvertrag
          </h4>

          <p className="text-gray-600 leading-relaxed mb-6">
            Kaufverträge gehören zu den wichtigsten Verträgen
            unseres Unternehmens.
          </p>

          <ul className="space-y-3 text-gray-600">
            <li>• Übergabe der Ware</li>
            <li>• Eigentumsübertragung</li>
            <li>• Lieferung ohne Sachmängel</li>
            <li>• Zahlungspflicht des Käufers</li>
            <li>• Annahme der Ware</li>
          </ul>
        </div>

        {/* ARBEITSVERTRAG */}
        <div className="bg-gray-900 rounded-[35px] p-8 text-white">

          <div className="text-5xl mb-5">👔</div>

          <h4 className="text-3xl font-light mb-6">
            Arbeitsvertrag
          </h4>

          <p className="text-gray-300 leading-relaxed mb-6">
            Arbeitsverträge regeln die Zusammenarbeit
            mit unseren Mitarbeitern.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>• Erbringung der Arbeitsleistung</li>
            <li>• Befolgung betrieblicher Anweisungen</li>
            <li>• Sorgfältige Arbeitsweise</li>
            <li>• Zahlung von Lohn und Gehalt</li>
            <li>• Arbeitsschutz und Gesundheitsschutz</li>
            <li>• Urlaub und Fürsorgepflicht</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)}

      {/* CONTACT */}
      {page === 'contact' && (
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white p-10 rounded-[35px] shadow-xl">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-800">
              Fragen & Anfragen
            </h2>

            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Dein Name"
                className="border border-gray-300 rounded-2xl px-5 py-4"
              />

              <input
                type="email"
                placeholder="Deine Email"
                className="border border-gray-300 rounded-2xl px-5 py-4"
              />

              <textarea
                rows="6"
                placeholder="Deine Nachricht"
                className="border border-gray-300 rounded-2xl px-5 py-4"
              />

              <button className="bg-gray-900 text-white py-4 rounded-full hover:scale-105 transition duration-300"
              onClick={() => setPage('send')}>
                Anfrage senden
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Demo Kontaktformular – Email Versand ist aktuell nur als Vorschau eingebaut.
            </p>
          </div>
        </section>
      )}

      {/* CHECKOUT (FAKE PAYMENT PAGE) */}
      {page === 'checkout' && (
        <section className="p-10 bg-white">
          <h2 className="text-3xl mb-5">Sichere Bezahlung</h2>

          {!checkoutProduct ? (
            <>
              <h3 className="text-xl mb-4">Warenkorb Gesamt: {totalPrice.toFixed(2)}€</h3>

              {cart.map((c, i) => (
                <p key={i}>{c.name} - {c.price}</p>
              ))}
            </>
          ) : (
            <h3 className="text-xl mb-4">
              Einzelkauf: {checkoutProduct.name} - {checkoutProduct.price}
            </h3>
          )}

          {/* FAKE PAYMENT OPTIONS */}
          <div className="grid gap-3 mt-6">
            <button
              onClick={() => setPaymentMethod('PayFlow')}
              className="bg-blue-100 p-3 rounded"
            >
              PayFlow (ähnlich PayPal)
            </button>

            <button
              onClick={() => setPaymentMethod('Klario')}
              className="bg-pink-100 p-3 rounded"
            >
              Klario
            </button>

            <button
              onClick={() => setPaymentMethod('EC Direct')}
              className="bg-gray-200 p-3 rounded"
            >
              EC Direct
            </button>
          </div>

          {paymentMethod && (
            <button onClick={() => { 
            setCart([]);  
            setPage('thx');
            }}  
              className="mt-6 bg-black text-white p-3 w-full rounded"
            >
              Zahlung mit {paymentMethod} abschließen
            </button>
          )}
        </section>
      )}
     {/* Checkout Massage */}
      {page === 'thx' && (
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
          <div className="bg-white p-10 rounded-[35px] shadow-lg">
              <h2 className="text-4xl md:text-6xl font-light leading-tight text-gray-800">
                Vielen dank für ihren Einkauf!
              </h2>
            <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setPage('shop')}
                  className="bg-gray-900 text-white px-6 py-3 rounded-full hover:scale-105 transition"
                >
                  Jetzt weiter shoppen
                </button>

                <button
                  onClick={() => setPage('home')}
                  className="border border-gray-400 px-6 py-3 rounded-full hover:bg-white transition"
                >
                  Home
                </button>
              </div>
          </div>
        </section>
      )}
          {/* Massage send Massage */}
      {page === 'send' && (
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
          <div className="bg-white p-10 rounded-[35px] shadow-lg">
              <h2 className="text-4xl md:text-6xl font-light leading-tight text-gray-800">
                Ihre anfrage wurde versendet!
                 
              </h2>
              <p className="text-gray-600 text-lg">
                Sie erhalten in 2-3 Werktagen weitere Informationen.
                 
              </p>
            <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setPage('shop')}
                  className="bg-gray-900 text-white px-6 py-3 rounded-full hover:scale-105 transition"
                >
                  Jetzt weiter shoppen
                </button>

                <button
                  onClick={() => setPage('home')}
                  className="border border-gray-400 px-6 py-3 rounded-full hover:bg-white transition"
                >
                  Home
                </button>
              </div>
          </div>
        </section>
      )}
      {/* FOOTER */}
      <footer className="mt-20 border-t border-gray-300 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between items-center gap-5">
          <p className="text-gray-500">
            © 2026 AURELA – Premium Schmuck Shop
          </p>

          <div className="flex gap-5 text-gray-500 flex-wrap justify-center">
            <span>EC Zahlung</span>
            <span>Luxus Design</span>
            <span>Modern</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

