import React from 'react'

const HomePage = () => {
  const [sidebarExpanded, setSidebarExpanded] = React.useState(false)
  return (
    <div className={`${sidebarExpanded && 'is-sidebar-open'}`}>
      <div className='min-h-100vh flex grow bg-slate-50 dark:bg-navy-900'>
        {/* Sidebar */}
        <div className='sidebar print:hidden'>
          {/* Sidebar Panel */}
          <div class='sidebar-panel'>
            <div class='flex h-full grow flex-col bg-white pl-4 dark:bg-navy-750'>
              {/* Sidebar Panel Header */}
              <div class='flex h-18 w-full items-center justify-between pl-4 pr-1'>
                <p class='text-base tracking-wider text-slate-800 dark:text-navy-100'>
                  Layouts
                </p>
                <button
                  onClick={() => setSidebarExpanded(false)}
                  class='btn h-7 w-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-6 w-6'
                    fill='none'
                    viewbox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15 19l-7-7 7-7'
                    />
                  </svg>
                </button>
              </div>
              <p>lorem ipsum</p>
              {/* Sidebar Panel Body */}
              <div
              // x-data="{expandedItem:'menu-item-3'}"
              // class='h-[calc(100%-4.5rem)] overflow-x-hidden pb-6'
              // x-init='$el._x_simplebar = new SimpleBar($el);'
              >
                {/* <ul class="flex flex-1 flex-col px-4 font-inter">
              <li x-data="accordionItem('menu-item-1')">
                <a
                  :class="expanded && 'text-slate-800 font-semibold dark:text-navy-50'"
                  @click="expanded = !expanded"
                  class="flex items-center justify-between py-2 text-xs+ tracking-wide text-slate-500 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                  href="javascript:void(0);"
                >
                  <span>Onboarding</span>
                  <svg
                    :class="expanded && 'rotate-90'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-slate-400 transition-transform ease-in-out"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <ul x-collapse x-show="expanded">
                  <li>
                    <a
                      x-data="navLink"
                      href="pages-onboarding-1.html"
                      :class="isActive ? 'font-medium text-primary dark:text-accent-light' : 'text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50'"
                      class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                    >
                      <div class="flex items-center space-x-2">
                        <div
                          class="h-1.5 w-1.5 rounded-full border border-current opacity-40"
                        ></div>
                        <span>Onboarding 1</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      x-data="navLink"
                      href="pages-onboarding-2.html"
                      :class="isActive ? 'font-medium text-primary dark:text-accent-light' : 'text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50'"
                      class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                    >
                      <div class="flex items-center space-x-2">
                        <div
                          class="h-1.5 w-1.5 rounded-full border border-current opacity-40"
                        ></div>
                        <span>Onboarding 2</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500"></div>

            <ul class="flex flex-1 flex-col px-4 font-inter">
              <li x-data="accordionItem('menu-item-7')">
                <a
                  :class="expanded && 'text-slate-800 font-semibold dark:text-navy-50'"
                  @click="expanded = !expanded"
                  class="flex items-center justify-between py-2 text-xs+ tracking-wide text-slate-500 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                  href="javascript:void(0);"
                >
                  <span>Sign In</span>
                  <svg
                    :class="expanded && 'rotate-90'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-slate-400 transition-transform ease-in-out"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <ul x-collapse x-show="expanded">
                  <li>
                    <a
                      x-data="navLink"
                      href="pages-login-1.html"
                      :class="isActive ? 'font-medium text-primary dark:text-accent-light' : 'text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50'"
                      class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                    >
                      <div class="flex items-center space-x-2">
                        <div
                          class="h-1.5 w-1.5 rounded-full border border-current opacity-40"
                        ></div>
                        <span>Sign In 1</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500"></div>

            <ul class="flex flex-1 flex-col px-4 font-inter">
              <li x-data="accordionItem('menu-item-9')">
                <a
                  :class="expanded && 'text-slate-800 font-semibold dark:text-navy-50'"
                  @click="expanded = !expanded"
                  class="flex items-center justify-between py-2 text-xs+ tracking-wide text-slate-500 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                  href="javascript:void(0);"
                >
                  <span>Error</span>
                  <svg
                    :class="expanded && 'rotate-90'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-slate-400 transition-transform ease-in-out"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <ul x-collapse x-show="expanded">
                  <li>
                    <a
                      x-data="navLink"
                      href="pages-error-404-1.html"
                      :class="isActive ? 'font-medium text-primary dark:text-accent-light' : 'text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50'"
                      class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                    >
                      <div class="flex items-center space-x-2">
                        <div
                          class="h-1.5 w-1.5 rounded-full border border-current opacity-40"
                        ></div>
                        <span>Error 404 v1</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      x-data="navLink"
                      href="pages-error-404-2.html"
                      :class="isActive ? 'font-medium text-primary dark:text-accent-light' : 'text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50'"
                      class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                    >
                      <div class="flex items-center space-x-2">
                        <div
                          class="h-1.5 w-1.5 rounded-full border border-current opacity-40"
                        ></div>
                        <span>Error 404 v2</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      x-data="navLink"
                      href="pages-error-404-3.html"
                      :class="isActive ? 'font-medium text-primary dark:text-accent-light' : 'text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50'"
                      class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                    >
                      <div class="flex items-center space-x-2">
                        <div
                          class="h-1.5 w-1.5 rounded-full border border-current opacity-40"
                        ></div>
                        <span>Error 404 v3</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul> */}
              </div>
            </div>
          </div>
        </div>

        {/* App Header Wrapper*/}
        <nav className='header print:hidden'>
          {/* App Header  */}
          <div className='header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden'>
            {/* Header Items */}
            <div className='flex w-full items-center justify-between'>
              {/* Left: Sidebar Toggle Button */}
              <div className='h-7 w-7'>
                <button
                  className={`menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80 ${
                    sidebarExpanded && 'active'
                  }`}
                  onClick={() => setSidebarExpanded(!sidebarExpanded)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

              {/* Right: Header buttons */}
              <div className='-mr-1.5 flex items-center space-x-2'>
                {/* Mobile Search Toggle */}
                <button
                  // @click="$store.global.isSearchbarActive = !$store.global.isSearchbarActive"
                  className='btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5.5 w-5.5 text-slate-500 dark:text-navy-100'
                    fill='none'
                    viewbox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='1.5'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </button>

                {/* Main Searchbar */}
                <template
                //   x-if='$store.breakpoints.smAndUp'
                >
                  <div
                    className='flex'
                    //   x-data="usePopper({placement:'bottom-end',offset:12})"
                    //   @click.outside="if(isShowPopper) isShowPopper = false"
                  >
                    <div className='relative mr-4 flex h-8'>
                      <input
                        placeholder='Search here...'
                        className='form-input peer h-full rounded-full bg-slate-150 px-4 pl-9 text-xs+ text-slate-800 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900'
                        //   :className="isShowPopper ? 'w-80' : 'w-60'"
                        //   @focus="isShowPopper= true"
                        type='text'
                        //   x-ref='popperRef'
                      />
                      <div className='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4.5 w-4.5 transition-colors duration-200'
                          fill='currentColor'
                          viewbox='0 0 24 24'
                        >
                          <path d='M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                </template>

                {/* Dark Mode Toggle */}
                <button
                  // @click="$store.global.isDarkModeEnabled = !$store.global.isDarkModeEnabled"
                  className='btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'
                >
                  <svg
                    //   x-show='$store.global.isDarkModeEnabled'
                    //   x-transition:enter='transition-transform duration-200 ease-out absolute origin-top'
                    //   x-transition:enter-start='scale-75'
                    //   x-transition:enter-end='scale-100 static'
                    className='h-6 w-6 text-amber-400'
                    fill='currentColor'
                    viewbox='0 0 24 24'
                  >
                    <path d='M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z' />
                  </svg>
                  {/* <svg
                  xmlns='http://www.w3.org/2000/svg'
                  //   x-show='!$store.global.isDarkModeEnabled'
                  //   x-transition:enter='transition-transform duration-200 ease-out absolute origin-top'
                  x-transition:enter-start='scale-75'
                  x-transition:enter-end='scale-100 static'
                  className='h-6 w-6 text-amber-400'
                  viewbox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                    clip-rule='evenodd'
                  />
                </svg> */}
                </button>

                {/* Notification*/}
                <div
                  x-effect='if($store.global.isSearchbarActive) isShowPopper = false'
                  x-data="usePopper({placement:'bottom-end',offset:12})"
                  // @click.outside="if(isShowPopper) isShowPopper = false"
                  className='flex'
                >
                  <button
                    //   @click="isShowPopper = !isShowPopper"
                    x-ref='popperRef'
                    className='btn relative h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-slate-500 dark:text-navy-100'
                      stroke='currentColor'
                      fill='none'
                      viewbox='0 0 24 24'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.5'
                        d='M15.375 17.556h-6.75m6.75 0H21l-1.58-1.562a2.254 2.254 0 01-.67-1.596v-3.51a6.612 6.612 0 00-1.238-3.85 6.744 6.744 0 00-3.262-2.437v-.379c0-.59-.237-1.154-.659-1.571A2.265 2.265 0 0012 2c-.597 0-1.169.234-1.591.65a2.208 2.208 0 00-.659 1.572v.38c-2.621.915-4.5 3.385-4.5 6.287v3.51c0 .598-.24 1.172-.67 1.595L3 17.556h12.375zm0 0v1.11c0 .885-.356 1.733-.989 2.358A3.397 3.397 0 0112 22a3.397 3.397 0 01-2.386-.976 3.313 3.313 0 01-.989-2.357v-1.111h6.75z'
                      />
                    </svg>

                    <span className='absolute -top-px -right-px flex h-3 w-3 items-center justify-center'>
                      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80'></span>
                      <span className='inline-flex h-2 w-2 rounded-full bg-secondary'></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Wrapper */}
        <main className='main-content w-full px-[var(--margin-x)] pb-8'>
          <div className='flex items-center space-x-4 py-5 lg:py-6'>
            <h2 className='text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl'>
              Blank Template
            </h2>
          </div>
        </main>
      </div>
    </div>
  )
}

export default HomePage
