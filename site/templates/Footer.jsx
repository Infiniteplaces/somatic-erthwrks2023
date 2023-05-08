import { h } from 'hyposcript'
import Link from './Link'

export default function Footer({ links, copyright }) {
  return (
    <footer class="relative bg-footer m:pt-130 px-15 m:px-25 flex justify-between items-end text-14 m:text-24 leading-133 text-melon">
      <div class="m:flex py-20 m:py-40">
        <p class="mb-35 m:mb-0 m:mr-55">
          {copyright.replace(/%s/g, new Date().getFullYear())}
        </p>
        <nav class="space-x-20 m:space-x-35">
          {links.map(link => (
            <Link className="hover:underline" link={link}>
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <button
        class="m:py-40 flex absolute m:static top-20 right-15 group"
        data-component="backToTop"
      >
        <span class="group-hover:underline">Back to top</span>
        <svg
          class="w-16 m:w-27 ml-8 m:ml-15"
          viewBox="0 0 27 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5748 5.7917C17.4083 3.92057 15.1926 2.0497 13.0262 0.227718C12.1401 -0.510711 11.1059 0.917032 11.9429 1.65544C14.1095 3.52658 16.3251 5.39745 18.4916 7.21943C19.3777 7.9582 20.4609 6.53011 19.5748 5.7917Z"
            class="fill-current"
          />
          <path
            d="M11.7454 0.523352C10.7112 2.73897 9.48024 4.85638 8.05251 6.87488C7.41231 7.81049 8.8404 8.89372 9.48024 7.95811C10.9575 5.79155 12.287 3.57593 13.3699 1.2126C13.8627 0.12936 12.2378 -0.510558 11.7453 0.523282L11.7454 0.523352Z"
            class="fill-current"
          />
          <path
            d="M25.9263 18.446C24.6462 14.0638 19.8207 12.1435 15.2909 11.7496C15.0941 8.20447 14.2567 4.61018 13.4198 1.60658C13.1244 0.523341 11.4504 1.21263 11.7949 2.29589C12.5828 5.05313 13.3707 8.40149 13.5675 11.6511C12.5828 11.6511 11.6472 11.7002 10.7608 11.7988C5.88611 12.3895 -1.20408 16.624 0.174584 22.5327C1.5041 28.2444 8.98819 26.4223 11.8932 23.3206C14.3551 20.6619 15.2412 17.1658 15.2907 13.5222C17.2601 13.7685 19.1313 14.3101 20.7562 15.1471C23.612 16.6734 25.4832 19.8741 23.5629 22.9267C21.8394 25.6839 18.3928 26.3732 15.3402 26.3732C14.2078 26.3732 14.454 28.1458 15.5864 28.1458C20.707 28.0476 27.7974 24.7486 25.9264 18.4459L25.9263 18.446ZM11.7458 20.514C10.2685 22.9267 7.46216 24.9947 4.50779 24.4036C0.224174 23.5666 1.94733 18.7905 4.06473 16.6731C6.47748 14.3101 10.0227 13.2759 13.5677 13.3254C13.5182 15.935 13.026 18.3969 11.7456 20.514H11.7458Z"
            class="fill-current"
          />
        </svg>
      </button>
    </footer>
  )
}