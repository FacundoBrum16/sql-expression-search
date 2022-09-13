<template>
    <button class="hover:bg-slate-700 flex gap-x-2 pl-3 w-full py-3 rounded-lg items-center fill-[#94A3B8] hover:fill-white hover:text-white text-slate-400">
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_507_1722)">
        <path d="M14.815 0H5.97073C5.3404 0 4.82764 0.5128 4.82764 1.1431V3.82602H5.87111V1.1431C5.87111 1.08817 5.91581 1.04348 5.97073 1.04348H14.815C14.8699 1.04348 14.9146 1.08817 14.9146 1.1431V9.98734C14.9146 10.0423 14.8699 10.087 14.815 10.087H12.2157V11.1305H14.815C15.4453 11.1305 15.9581 10.6177 15.9581 9.98734V1.1431C15.958 0.5128 15.4453 0 14.815 0Z"/>
        <path d="M10.0291 4.86914H1.18488C0.554548 4.86914 0.041748 5.38194 0.041748 6.01227V14.8565C0.0417828 15.4868 0.554548 15.9996 1.18488 15.9996H10.0291C10.6595 15.9996 11.1723 15.4868 11.1723 14.8565V6.01227C11.1723 5.38194 10.6594 4.86914 10.0291 4.86914ZM10.0292 14.9562H1.18488C1.12992 14.9562 1.08523 14.9115 1.08523 14.8565V6.01227C1.08523 5.95731 1.12992 5.91262 1.18488 5.91262H10.0291C10.0841 5.91262 10.1288 5.95731 10.1288 6.01227V14.8565H10.1288C10.1288 14.9115 10.0841 14.9562 10.0292 14.9562Z"/>
        </g>
        <defs>
        <clipPath id="clip0_507_1722">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        <span class="text-xs uppercase block truncate w-52 ">WHERE SINGLE_VALUE_MATCHING_EXPRESSION;</span>
    </button>
</template>

<script>
export default {
  name: "RecentExpression",
  props: {
    msg: String,
  },
};
</script>