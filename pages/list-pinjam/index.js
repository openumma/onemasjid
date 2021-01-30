import React from "react";

export default function ListPinjam() {
  const [open, setOpen] = React.useState();
  const [data, setData] = React.useState();
  const daftarBarang = React.useMemo(
    () => [
      {
        id: 1,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
        tanggal: "16 Januari 2020 - 16 Januari 2020",
        status: "Belum Balikin",
        peringatan1: "Anda belum mengembalikan 1",
        peringatan2: "Anda belum mengembalikan 2",
      },
      {
        id: 2,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
        tanggal: "16 Januari 2020 - 16 Januari 2020",
        status: "Belum Balikin",
        peringatan1: "Anda belum mengembalikan 1",
        peringatan2: "Anda belum mengembalikan 2",
      },
      {
        id: 3,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
        tanggal: "16 Januari 2020 - 16 Januari 2020",
        status: "Sudah Balikin",
      },
    ],
    []
  );

  const getDetailItem = React.useCallback((open) => {
    if (open) {
      let test = daftarBarang.filter((e) => e.id === open);
      setData(test[0]);
    }
  }, []);

  React.useEffect(() => {
    getDetailItem(open);
  }, [open]);

  console.log(data);

  return (
    <React.Fragment>
      <div className='pt-20 pb-4 px-4 lg:px-16'>
        <div className='flex flex-col lg:flex-row justify-between items-start space-x-0 lg:space-x-2 lg:space-y-0 space-y-2'>
          <div className='w-full lg:w-7/12'>
            <p className='font-sans font-bold text-xl'>List Pinjam</p>
            <div className='mt-8 flex flex-col space-y-2'>
              {daftarBarang.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setOpen(item.id)}
                  className={`${
                    open === item.id ? "bg-gray-200" : ""
                  } cursor-pointer box p-6 w-full grid grid-cols-1 lg:grid-cols-3 gap-2`}
                >
                  <div className='col-span-1 flex items-center justify-center'>
                    <img
                      className='h-40 w-40'
                      src={item.gambar_barang}
                      alt='example'
                    />
                  </div>
                  <div className='space-y-2 col-span-2'>
                    <p className='font-sans text-black font-bold text-xl'>
                      {item.deskripsi_barang}
                    </p>
                    <p className='font-sans text-black font-sm'>{item.harga}</p>
                    <p className='font-sans text-black opacity-50'>
                      {item.alamat}
                    </p>
                    <p className='font-sans text-black'>Pinjam hingga</p>
                    <p className='font-sans text-red-500'>{item.tanggal}</p>
                    <p
                      className={`font-sans ${
                        item.status === "Belum Balikin"
                          ? "text-red-500"
                          : "text-green-500"
                      } text-right`}
                    >
                      {item.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full lg:w-5/12'>
            <p className='font-sans font-bold text-xl'>Profil Pemilik</p>
            <div className={`${open ? "block" : "hidden"} mt-8`}>
              <div className='box p-4'>
                <div className='flex justify-center items-center flex-col lg:flex-row space-y-2 space-x-2'>
                  <img className='h-20 w-20' src='/images/profil.png' />
                  <div className='space-y-2'>
                    <p className='font-sans text-xl font-bold'>
                      Masjid Sunda Kelapa, Jakarta
                    </p>
                    <p className='font-sans text-black'>
                      Jl. Taman Sunda Kelapa No.16, RT.6/RW.4, Menteng, Kec.
                      Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta
                      10310
                    </p>
                  </div>
                </div>

                <div className='mt-8 space-y-2'>
                  <p>Catatan :</p>
                  <p className='font-sans'>
                    Puter dulu sebelum make, kerdusnya jangan dibuang yaa, sama
                    jangan dirusak plisss
                  </p>
                </div>

                {data ? (
                  <div className='mt-8 space-y-2'>
                    {data.peringatan1 || data.peringatan2 ? (
                      <p>Peringatan :</p>
                    ) : null}
                    {data.peringatan1 ? (
                      <p className='font-sans font-bold text-red-500'>
                        {data.peringatan1}
                      </p>
                    ) : null}
                    {data.peringatan2 ? (
                      <p className='font-sans font-bold text-red-500'>
                        {data.peringatan2}
                      </p>
                    ) : null}
                    {data ? (
                      <p
                        className={`mt-4 text-right ${
                          data.status === "Belum Balikin"
                            ? "text-red-500"
                            : "text-green-500"
                        } font-bold`}
                      >
                        {data.status}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box {
          border: 1px solid #d4d4d4;
          box-sizing: border-box;
          /* 9dp/Light */

          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
          border-radius: 16px;
        }
      `}</style>
    </React.Fragment>
  );
}
