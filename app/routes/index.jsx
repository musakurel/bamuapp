import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  const news = [
    {
      title: "19-24 Ekim 2021’de İstanbul Yenikapı’dayız",
      content:
        "19-24 Ekim tarihleri arasında İstanbul Yenikapı etkinlik alanında düzenlenen Malatya Günleri’ndeyiz. Tüm müşterilerimizi standımıza bekliyoruz.      ",
      img: "/fair1.jpeg",
    },
    {
      title: "İstanbul Malatya Günleri’ndeyiz",
      content:
        "9-13 Ekim Tarihleri arasında Yenikapı’da düzenlenecek olan Malatya Tanıtım Günleri’ndeyiz      ",
      img: "/fair2.jpeg",
    },
    {
      title:
        "6-15 Eylül 2019 Tarihleri Arasında İzmir Enternasyonel Fuarı’ndayız.    ",
      content:
        "Bamu olarak 6-15 Eylül Tarihleri Arasında İzmir Enternasyonel Fuarı’ndayız.    ",
      img: "/fair3.png",
    },
  ];
  return (
    <div>
      <main className="relative bg-white sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="/header3.jpeg"
                  alt="Sonic Youth On Stage"
                />
              </div>
              <div className="relative m-40 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                  >
                    View Notes for {user?.email}
                  </Link>
                  )
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
            <h4 className="text-center">Bazı Müşterilerimiz</h4>
            <div className="mt-6 flex flex-wrap justify-center gap-8">
              {[
                {
                  src: "/esenlik.png",
                  alt: "Esenlik",
                },

                {
                  src: "/carsimarket.png",
                  alt: "Çarşı",
                },

                {
                  src: "/mgross.png",
                  alt: "Mgross",
                },
                {
                  src: "/guvenli.png",
                  alt: "Güvenli Market",
                },

                {
                  src: "/hilton.jpeg",
                  alt: "Hilton",
                },
                {
                  src: "/sedir.jpeg",
                  alt: "Sedir",
                },
                {
                  src: "/akranlar.webp",
                  alt: "Akranlar",
                },
              ].map((img) => (
                <a
                  key={img.href}
                  href={img.href}
                  className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
                >
                  <img alt={img.alt} src={img.src} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div class="mx-auto grid max-w-7xl grid-cols-2 items-center gap-4 py-20 px-10 sm:px-6 lg:px-8">
        <div>
          <img class="w-full rounded-lg" src="/M3-1024x1024.jpeg" />
        </div>
        <div class="mx-auto p-5">
          <h5 class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mutfağınızın vazgeçilmezi: Tüm yemeklerde kullanabileceğiniz İsot
            Kreması
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Sulu yemeklerde, balık-tavuk ızgaralarda, çiğköftelerde,
            makarnalarda vb. tüm yemeklerinizde İsot Kreması'nı rahatlıkla
            kullanabilirsiniz. Salça kullanmanıza gerek kalmaz, muhteşem
            karışımın verdiği lezzeti siz de tadın!
          </p>
        </div>{" "}
        <div class="mx-auto p-5">
          <h5 class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nasıl kullanabilirsiniz?
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Kahvaltılarda ekmeğe sürerek, patates kızartmasının yanına sos
            olarak, omlet yaparken salça ve baharat yerine tüketebilirsiniz.
            Tavuk, Balık ve Ciğer ızgaraları soslamada kullanabilirsiniz. Salça
            ve baharat kullandığınız tüm yemeklerinizde kullanabilirsiniz.(Fırın
            yemekleri, Fasulye-nohut gibi sulu yemekler, kısır, makarna, bulgur
            pilavı, mantı sosu vb. tüm yemeklerde) Çiğköfte yaparken
            kullandığınızda başka hiçbir baharata veya salçaya gerek kalmaz.
            Ayrıca yanında meze olarak da kullanabilirsiniz.{" "}
          </p>
        </div>{" "}
        <div>
          <img class="w-full rounded-lg" src="/M4-1024x1024.jpeg" />
        </div>
      </div>

      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {news.map((haber, index) => {
          return (
            <>
              <div
                key={index}
                class="container max-w-md rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 md:m-10"
              >
                <img
                  class="max-h-80 rounded-t-lg"
                  src={haber.img}
                  alt={haber.title}
                />

                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {haber.title}{" "}
                  </h5>

                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {haber.content}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div class="dark:bg-gray-900">
        <section class="container mx-auto w-full py-36">
          <div class="flex flex-col items-center justify-center">
            <div class="text-center text-2xl font-black leading-snug text-gray-800 dark:text-white md:text-2xl lg:w-3/4">
              <h2>
                Bir işletmeniz mi var? İşyerinizde İsot Kreması satmak veya
                mutfağınızda kullanmak istiyorsanız hemen Whatsapp'tan irtibata
                geçin veya arayın.
              </h2>
            </div>
            <div class="mt-16 flex items-center justify-center">
              <a href="https://api.whatsapp.com/send?phone=908503054401">
                <button
                  type="button"
                  class="mr-2 mb-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Whatsapp
                </button>
              </a>
              <button
                type="button"
                class="mr-2 mb-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                08503054401
              </button>
            </div>
          </div>
        </section>
      </div>
      <footer class="bg-white p-4 dark:bg-gray-800 md:p-8 lg:p-10">
        <div class="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            class="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Bamu İsot Kreması
          </a>
          <ul class="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
            <li>
              <a href="/satis-noktalari" class="mr-4 hover:underline md:mr-6 ">
                Satış Noktaları
              </a>
            </li>
            <li>
              <a href="/urunlerimiz" class="mr-4 hover:underline md:mr-6">
                Ürünlerimiz
              </a>
            </li>
            <li>
              <a href="/iletisim" class="mr-4 hover:underline md:mr-6 ">
                İletişim
              </a>
            </li>
            <li>
              <a
                href="https://bamushop.com/"
                class="mr-4 hover:underline md:mr-6"
              >
                Online Alışveriş
              </a>
            </li>
          </ul>
          <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2021-2022{" "}
            <a href="#" class="hover:underline">
              Bamu
            </a>
            . Tüm hakları saklıdır.
          </span>
        </div>
      </footer>
    </div>
  );
}
