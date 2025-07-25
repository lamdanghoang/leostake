import React from "react";

interface BankIconProps {
    className?: string;
    width?: number;
    height?: number;
}

const BankIcon: React.FC<BankIconProps> = ({
    className = "",
    width = 24,
    height = 24,
}) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            fill="currentColor"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <path
                        fill="currentColor"
                        d="M215.938,279.063c-1.203,0-6.563,0.344-7.016,0.406c-0.438,0.078-0.781,0.141-1.016,0.156 c-2.75,0.563-2.563,2.156-2.563,4.797v13.594h13.766h10.641v14.891h13.406v-14.891h12.156v14.891h13.391v-15 c4.984-0.281,10.281-1.031,14.516-2.344c5.391-1.625,8.516-3.875,12.172-6.75c3.672-2.875,6.469-6.281,8.391-10.281 c1.906-3.953,2.875-8.281,2.875-12.969c-0.016-12.969-7.359-21.844-23.094-24.594c5.156-2,10.938-7.828,12.641-9.875 c1.734-2.063,3.016-4.281,3.828-6.656c0.813-2.344,1.234-4.844,1.234-7.438c0-4.531-0.828-8.609-2.453-12.219 c-1.656-3.609-4.344-6.563-7.781-9.25c-6.141-4.766-15.078-7.031-22.328-7.641v-15.516h-13.391v15.297l-12.156-0.047v-15.25H229.75 v15.219h-10.641h-13.766v12.188c0,2.625-0.188,4.219,2.563,4.766c0.234,0.047,0.578,0.109,1.016,0.188 c0.453,0.078,5.828,0.234,7.016,0.406c1.844,0.266,3.172,1.234,3.172,3.734v66.094 C219.109,277.031,218.094,279.063,215.938,279.063z M274.188,260.297c0.625,1.484,0.953,3.125,0.953,4.953 c0,1.781-0.297,3.438-0.859,5c-0.563,1.578-1.5,2.938-2.781,4.125s-2.984,2.125-5.125,2.828c-2.125,0.703-4.766,1.047-7.922,1.047 h-14.078v-24.906h14.016c2.984,0,5.531,0.266,7.656,0.813c2.094,0.563,3.828,1.344,5.172,2.375 C272.578,257.563,273.563,258.844,274.188,260.297z M243.891,207.156h10.875c5.734,0,9.938,0.938,12.641,2.813 s4.031,5.047,4.031,9.469c0,4.281-1.484,7.375-4.469,9.344c-3,1.969-7.375,2.938-13.156,2.938h-9.922V207.156z"
                    ></path>
                    <path
                        fill="currentColor"
                        d="M162.969,480.609c-0.703-0.703-1.406-1.313-2.109-1.828c-0.703-0.5-1.734-1.125-3.078-1.813 c5.641-3.141,8.453-7.969,8.453-14.5c0-2.875-0.5-5.469-1.484-7.781c-1-2.313-2.406-4.281-4.234-5.906 c-1.813-1.625-4.047-2.891-6.672-3.781c-2.625-0.906-5.531-1.344-8.734-1.344h-27.453V512h28.609c3.203,0,6.094-0.469,8.688-1.391 s4.797-2.234,6.625-3.938s3.219-3.734,4.172-6.141c0.969-2.406,1.453-5.109,1.453-8.125c0-2.422-0.344-4.594-1.016-6.516 S164.438,482.219,162.969,480.609z M131,455.563h13.063c2.75,0,4.906,0.688,6.484,2.094c1.563,1.406,2.344,3.344,2.344,5.766 c0,2.438-0.781,4.359-2.344,5.766c-1.578,1.406-3.734,2.109-6.484,2.109H131V455.563z M151.453,497.844 c-1.609,1.5-3.781,2.25-6.531,2.25H131v-16.797h13.922c2.75,0,4.922,0.734,6.531,2.203c1.594,1.469,2.391,3.531,2.391,6.156 S153.047,496.344,151.453,497.844z"
                    ></path>
                    <path
                        fill="currentColor"
                        d="M207.797,443.656L182.938,512h13.922l4.125-12.094h24.281L229.313,512h13.906l-24.953-68.344H207.797z M204.734,488.672l8.641-24.859l8.344,24.859H204.734z"
                    ></path>
                    <polygon
                        fill="currentColor"
                        points="300.25,485.5 273.188,443.656 261.281,443.656 261.281,512 274.625,512 274.625,470.047 301.688,512 313.594,512 313.594,443.656 300.25,443.656 "
                    ></polygon>
                    <polygon
                        fill="currentColor"
                        points="392.703,443.656 376.469,443.656 352.375,473.406 352.375,443.656 339.031,443.656 339.031,512 352.375,512 352.375,491.453 361.203,480.906 378.781,512 394.328,512 370.047,470.813 "
                    ></polygon>
                    <polygon
                        fill="currentColor"
                        points="256,0 64,69.344 64,109.344 80,109.344 80,121.344 432,121.344 432,109.344 448,109.344 448,69.344 "
                    ></polygon>
                    <polygon
                        fill="currentColor"
                        points="432,357.344 80,357.344 80,389.344 64,389.344 64,421.344 448,421.344 448,389.344 432,389.344 "
                    ></polygon>
                    <polygon
                        fill="currentColor"
                        points="344,325.344 344,341.344 408,341.344 408,325.344 400,325.344 400,153.344 408,153.344 408,137.344 344,137.344 344,153.344 352,153.344 352,325.344 "
                    ></polygon>
                    <polygon
                        fill="currentColor"
                        points="104,325.344 104,341.344 168,341.344 168,325.344 160,325.344 160,153.344 168,153.344 168,137.344 104,137.344 104,153.344 112,153.344 112,325.344 "
                    ></polygon>
                </g>
            </g>
        </svg>
    );
};

export default BankIcon;
