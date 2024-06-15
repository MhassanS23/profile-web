{
    /* {isLoading ? (
          <div className="hidden lg:flex lg:flex-1 gap-4 lg:justify-end">
            <div className="flex items-center justify-center text-white text-md">
              <svg
                aria-hidden="true"
                role="status"
                className="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                ></path>
              </svg>
              Memuat...
            </div>
          </div>
        ) : !user ? (
          <div className="hidden lg:flex lg:flex-1 gap-4 lg:justify-end">
            <a
              href="/login"
              className="text-sm font-semibold leading-6 bg-orange-1 px-6 py-2 text-white rounded-full"
            >
              <div className="flex gap-2 items-center ">
                <span>Masuk</span>
                <RiLoginCircleLine className="h-5 w-5" />
              </div>
            </a>
            <a
              href="/"
              className="text-sm font-semibold leading-6 bg-white px-4 py-2 text-orange-1 rounded-full"
            >
              Daftar
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 gap-2 items-center lg:justify-end">
            <div className="fixed w-full max-w-sm px-2">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? "text-white" : "text-white/90"}
                inline-flex items-center px-2 py-2 rounded-full relative text-base font-medium hover:text-orange`}
                      onClick={() => {
                        getNotification(notificationPage);
                      }}
                    >
                      <span className="font-raleway text-white">Notifikasi </span>
                      <FaBell size={"1.5rem"} className="ml-2" color="white" />
                      <p
                        className={`absolute bottom-0 -right-1 rounded-full bg-red-500 px-2 text-sm text-white`}
                      >
                        {countNotif > 0 ? countNotif : "0"}
                      </p>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-3 w-max max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                          {!isLoadingNotif ? (
                            notif?.length > 0 ? (
                              <>
                                <div className="bg-gray-50 p-2 flex justify-between flex-row">
                                  <button
                                    disabled={isLoadingNotifDelete}
                                    onClick={deleteNotification}
                                    className="rounded-full w-max text-white px-2 text-sm bg-red-500"
                                  >
                                    {isLoadingNotifDelete ? (
                                      <div className="flex items-center justify-center">
                                        <svg
                                          aria-hidden="true"
                                          role="status"
                                          className="inline mr-3 w-4 h-4 text-white animate-spin"
                                          viewBox="0 0 100 101"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB"
                                          ></path>
                                          <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                        Tunggu...
                                      </div>
                                    ) : (
                                      "Hapus Semua"
                                    )}
                                  </button>
                                  <p className="font-unbounded text-white bg-orange-1 rounded-bl-full rounded-br-full w-[50%] p-1 text-center font-bold text-md">
                                    Notifikasi
                                  </p>
                                  <button
                                    disabled={isLoadingNotifUpdate}
                                    onClick={updateNotification}
                                    className="rounded-full w-max text-orange-1 px-2 text-sm bg-black"
                                  >
                                    {isLoadingNotifUpdate ? (
                                      <div className="flex items-center justify-center">
                                        <svg
                                          aria-hidden="true"
                                          role="status"
                                          className="inline mr-3 w-4 h-4 text-white animate-spin"
                                          viewBox="0 0 100 101"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB"
                                          ></path>
                                          <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                        Tunggu...
                                      </div>
                                    ) : (
                                      "Tandai Semua"
                                    )}
                                  </button>
                                </div>
                                <>
                                  {notif?.map((nt, ind) => {
                                    return (
                                      <div
                                        key={ind}
                                        className="relative flex flex-col gap-4 bg-white p-2 font-raleway"
                                      >
                                        <p
                                          className={`absolute top-4 right-2 rounded-full bg-red-500 px-1 py-2 text-sm text-white ${
                                            nt?.is_read ? "hidden" : ""
                                          }`}
                                        >
                                          {!nt?.is_read ? "Baru" : ""}
                                        </p>
                                        <p className="font-unbounded text-orange-1 bg-black rounded-bl-full rounded-br-full p-1 border-2 border-black text-center font-bold text-sm">
                                          {nt?.head}
                                        </p>
                                        <p className="text-orange-1 px-2">
                                          {nt?.message}
                                        </p>
                                        <p className="absolute bottom-0 right-0 rounded-tl-md rounded-bl-md bg-red-500 px-4 text-white">
                                          {reformatDate(nt?.createdAt)}
                                        </p>
                                      </div>
                                    );
                                  })}
                                </>
                                <div className="bg-gray-50 p-2">
                                  <div className="flex justify-center items-center gap-4">
                                    <button
                                      disabled={notificationPage === 1}
                                      onClick={() => {
                                        setNotificationPage((old) => old - 1);
                                        getNotification(notificationPage - 1);
                                      }}
                                      className="rounded-full p-1 text-white bg-orange-1 cursor-pointer border-2 border-white"
                                    >
                                      <MdNavigateBefore size={"1.5rem"} />
                                    </button>
                                    <p className="text-sm font-unbounded font-bold">
                                      {notificationPage} From{" "}
                                      {totalNotificationPage} Page
                                    </p>
                                    <button
                                      disabled={
                                        notificationPage ===
                                        totalNotificationPage
                                      }
                                      onClick={() => {
                                        setNotificationPage((old) => old + 1);
                                        getNotification(notificationPage + 1);
                                      }}
                                      className="rounded-full p-1 text-white bg-orange-1 cursor-pointer border-2 border-white"
                                    >
                                      <MdNavigateNext size={"1.5rem"} />
                                    </button>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                <div className="bg-gray-50 p-2 flex justify-between flex-row">
                                  <button className="rounded-full w-max text-white px-2 text-sm bg-red-500">
                                    Hapus Semua
                                  </button>
                                  <p className="font-unbounded text-white bg-orange-1 rounded-bl-full rounded-br-full w-[50%] p-1 text-center font-bold text-md">
                                    Notification
                                  </p>
                                  <button className="rounded-full w-max text-orange-1 px-2 text-sm bg-black">
                                    Tandai Semua
                                  </button>
                                </div>
                                <div className="flex items-center justify-center text-black text-md bg-white p-2 font-raleway">
                                  <p>No Notification</p>
                                </div>
                              </div>
                            )
                          ) : (
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                              <div className="bg-gray-50 p-2 flex justify-between flex-row">
                                <button className="rounded-full w-max text-white px-2 text-sm bg-red-500">
                                  Hapus Semua
                                </button>
                                <p className="font-unbounded text-white bg-orange-1 rounded-bl-full rounded-br-full w-[50%] p-1 text-center font-bold text-md">
                                  Notification
                                </p>
                                <button className="rounded-full w-max text-orange-1 px-2 text-sm bg-black">
                                  Tandai Semua
                                </button>
                              </div>
                              <div className="flex items-center justify-center text-black text-md bg-white p-2 font-raleway">
                                <svg
                                  aria-hidden="true"
                                  role="status"
                                  className="inline mr-3 w-4 h-4 text-white animate-spin"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"
                                  ></path>
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                                Memuat...
                              </div>
                            </div>
                          )}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
            <Profiles user={user} handleLogout={handleLogout} />
          </div>
        )} */
    //   <Popover.Group className='hidden font-raleway lg:flex lg:gap-x-12'>
    //             <Popover className='relative'>
    //                 <Popover.Button className='flex items-center gap-x-1 text-lg font-semibold leading-6'>
    //                     <BsMenuButtonWideFill className='h-4 w-4 flex-none' />
    //                     Menu
    //                     <AiFillCaretDown className='h-3 w-3 flex-none hover:text-white' aria-hidden='true' />
    //                 </Popover.Button>
    //                 <Transition
    //                     as={Fragment}
    //                     enter='transition ease-out duration-200'
    //                     enterFrom='opacity-0 translate-y-1'
    //                     enterTo='opacity-100 translate-y-0'
    //                     leave='transition ease-in duration-150'
    //                     leaveFrom='opacity-100 translate-y-0'
    //                     leaveTo='opacity-0 translate-y-1'>
    //                     <Popover.Panel className='absolute -left-48 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
    //                         <div className='p-4'>
    //                             {products.map((item) => (
    //                                 <div
    //                                     key={item.name}
    //                                     className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
    //                                     <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
    //                                         <item.icon
    //                                             className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
    //                                             aria-hidden='true'
    //                                         />
    //                                     </div>
    //                                     <div className='flex-auto'>
    //                                         <a href={item.href} className='block font-semibold text-gray-900'>
    //                                             {item.name}
    //                                             <span className='absolute inset-0' />
    //                                         </a>
    //                                         <p className='mt-1 text-gray-600'>{item.description}</p>
    //                                     </div>
    //                                 </div>
    //                             ))}
    //                         </div>
    //                     </Popover.Panel>
    //                 </Transition>
    //             </Popover>
    //         </Popover.Group>
}
