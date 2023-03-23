import React, { useState } from "react";
import "../styles/register.scss";
import { Button, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.scss";
import Transfer from "../components/Transfer";
import DeleteProduct from "../components/DeleteProduct";
import TransferHistory from "../components/TransferHistory";
import RequestStock from "../components/RequestStock";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ..............
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../components/Navbar";
import addProduct from "../assets/add.png";
// import Particles from "react-particles";
import Particles from "../components/Particles";
import HistoryDetails from "../components/HistoryDetails";
// ...........

function Dashboard() {
  const [addProduct, setaddProduct] = useState(true);
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [transfer, setTransfer] = useState(true);
  const [transferHistory, setTransferHistory] = useState(false);
  const [stock, setStock] = useState(false);
  const [product, setProduct] = useState(true);
  const [chain, setChain] = useState();
  const [transferHistoryDetails, setTransferHistoryDetails] = useState(false);

  const dashboardLinks = (a) => {
    if (a === "AddProduct") {
      setaddProduct(true);
      setDeleteProduct(false);
      setTransfer(false);
      setTransferHistory(false);
    }
    if (a === "DeleteProduct") {
      setaddProduct(false);
      setDeleteProduct(true);
      setTransfer(false);
      setTransferHistory(false);
      setStock(false);
    } else if (a === "Transfer") {
      setaddProduct(false);
      setDeleteProduct(false);
      setTransfer(true);
      setTransferHistory(false);
      setStock(false);
    } else if (a === "TransferHistory") {
      setaddProduct(false);
      setDeleteProduct(false);
      setTransfer(false);
      setTransferHistory(true);
      setStock(false);
    } else if (a === "HistoryDetails") {
      setaddProduct(false);
      setDeleteProduct(false);
      setTransfer(false);
      setTransferHistory(false);
      setStock(false);
      setTransferHistoryDetails(true);
    } else if (a === "RequestStock") {
      setaddProduct(false);
      setDeleteProduct(false);
      setTransfer(false);
      setTransferHistory(false);
      setStock(true);
      setTransferHistoryDetails(false);
    }
  };
  const toastInfo = () =>
    toast.success("Product Added", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <div className="dashboard-main">
        <div className="left-db">
          <ul>
            {product === true ? (
              <>
                <li
                  className={addProduct ? "active" : ""}
                  onClick={() => {
                    dashboardLinks("AddProduct");
                  }}
                >
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                    fill="#ffffff"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        d="M388 5094 c-184 -44 -329 -191 -373 -376 -13 -54 -15 -262 -15 -1450
0 -980 3 -1403 11 -1440 42 -199 223 -369 424 -398 40 -5 306 -10 617 -10
l546 0 -8 -32 c-5 -18 -27 -113 -50 -210 l-42 -178 -127 0 c-148 0 -219 -15
-294 -63 -129 -83 -187 -207 -187 -398 0 -88 11 -122 47 -138 16 -7 146 -11
400 -11 l376 0 -6 -42 c-3 -24 -11 -100 -18 -170 l-13 -128 24 -25 24 -25
1554 2 1555 3 19 26 c19 25 19 29 -12 324 -17 164 -35 306 -40 315 -5 10 -24
23 -41 29 -39 13 -86 -8 -95 -43 -5 -21 26 -378 42 -473 l5 -33 -561 0 c-390
0 -560 3 -560 11 0 6 -38 371 -85 812 -72 667 -89 806 -104 827 l-18 25 -437
3 -436 2 0 24 c0 13 13 151 30 306 16 155 30 291 30 301 0 18 11 19 165 19
l165 0 0 -98 c0 -82 3 -102 18 -114 41 -37 100 -28 121 19 6 13 11 62 11 108
l0 85 470 0 470 0 0 -85 c0 -46 5 -95 11 -108 21 -47 80 -56 121 -19 15 12 18
32 18 114 l0 98 165 0 c150 0 165 -2 165 -17 0 -58 163 -1583 171 -1604 19
-49 79 -59 122 -21 23 20 22 53 -8 334 -14 128 -25 240 -25 249 0 11 20 24 58
37 160 59 277 193 317 366 22 93 22 2801 0 2894 -44 187 -190 333 -377 377
-91 21 -4252 21 -4340 -1z m4372 -170 c82 -40 134 -92 174 -174 l31 -65 3
-1312 2 -1313 -155 0 c-140 0 -155 2 -155 17 0 59 -53 502 -62 520 -18 36 -60
43 -264 43 l-194 0 0 130 c0 158 -10 211 -61 318 -70 145 -197 260 -357 320
-59 23 -83 26 -197 26 -111 1 -140 -2 -196 -22 -168 -58 -292 -168 -369 -327
-50 -104 -60 -158 -60 -315 l0 -130 -195 0 c-207 0 -257 -9 -269 -47 -6 -19
-56 -479 -56 -514 0 -19 -14 -19 -661 -19 -483 0 -666 -3 -682 -12 -50 -26
-60 -69 -26 -112 l20 -26 665 0 664 0 0 -24 c0 -58 7 -56 -234 -56 -270 0
-259 5 -276 -135 -5 -50 -10 -96 -10 -102 0 -10 -147 -13 -702 -13 l-703 0
-56 23 c-74 31 -120 67 -163 130 -33 48 -69 152 -59 170 2 4 159 7 348 7 l344
0 20 26 c24 30 26 43 10 77 -20 45 -41 47 -395 47 l-334 0 2 1313 3 1312 31
65 c50 105 142 179 248 200 22 4 991 7 2151 6 l2110 -1 65 -31z m-1093 -1659
c120 -36 245 -157 293 -282 19 -47 24 -85 28 -200 l5 -143 -472 0 -471 0 0
118 c0 189 36 288 141 393 64 64 150 112 230 129 59 12 182 5 246 -15z m1296
-1362 c11 -18 -26 -122 -61 -172 -37 -55 -106 -110 -160 -129 l-29 -10 -12
106 c-6 59 -14 131 -17 160 l-6 52 140 0 c78 0 143 -3 145 -7z m-1683 -244 c0
-25 148 -1418 156 -1471 l6 -38 -801 0 c-441 0 -801 3 -801 8 0 4 36 344 80
755 44 412 80 753 80 758 0 5 256 9 640 9 640 0 640 0 640 -21z m-1463 -281
c-3 -24 -13 -118 -23 -210 l-17 -168 -59 0 c-40 0 -58 4 -58 13 0 6 21 101 47
210 l47 197 35 0 34 0 -6 -42z m-61 -570 c-3 -24 -10 -90 -16 -148 -6 -58 -15
-108 -19 -113 -4 -4 -158 -6 -342 -5 l-334 3 2 59 c4 112 73 206 174 234 19 6
148 11 288 11 l253 1 -6 -42z"
                      />
                      <path
                        d="M1465 4629 c-48 -13 -115 -78 -141 -133 -21 -46 -24 -65 -24 -188 l0
-137 -332 -3 c-367 -3 -367 -3 -422 -68 -36 -44 -49 -101 -44 -200 7 -112 29
-153 111 -205 12 -8 27 -97 67 -405 28 -217 58 -417 66 -444 30 -95 100 -169
191 -202 30 -10 155 -13 613 -14 l575 0 60 29 c75 35 135 100 159 173 10 29
41 232 70 451 l51 399 40 27 c64 42 85 96 85 215 0 126 -19 173 -88 214 l-47
27 -326 3 -326 3 -5 138 c-4 125 -7 143 -31 194 -43 87 -124 138 -219 136 -29
0 -67 -5 -83 -10z m146 -168 l29 -29 0 -447 0 -447 -29 -29 c-48 -47 -116 -38
-146 21 -21 40 -22 871 -1 909 31 56 102 67 147 22z m-311 -541 l0 -90 -304 0
c-167 0 -311 3 -320 6 -13 5 -16 23 -16 90 l0 84 320 0 320 0 0 -90z m1138 12
c2 -46 -2 -79 -9 -88 -9 -11 -67 -14 -320 -14 l-309 0 0 90 0 90 318 -2 317
-3 3 -73z m-1138 -323 c0 -94 15 -141 64 -196 51 -58 104 -82 179 -83 150 0
240 95 254 269 l6 81 253 0 c140 0 254 -4 254 -8 0 -35 -103 -777 -110 -795
-14 -34 -42 -63 -77 -81 -28 -14 -97 -16 -581 -16 l-549 0 -42 31 c-24 16 -48
45 -55 62 -7 18 -34 196 -60 397 -26 201 -49 375 -51 388 l-5 22 260 0 260 0
0 -71z"
                      />
                      <path
                        d="M2923 4330 c-45 -18 -57 -81 -23 -118 20 -21 28 -22 215 -22 182 0
196 1 215 20 27 27 26 81 -1 106 -19 17 -40 19 -203 21 -99 1 -191 -2 -203 -7z"
                      />
                      <path
                        d="M3583 4330 c-44 -18 -57 -86 -23 -120 20 -20 33 -20 580 -20 547 0
560 0 580 20 27 27 26 81 -1 106 -20 18 -46 19 -568 21 -303 1 -556 -2 -568
-7z"
                      />
                      <path
                        d="M2902 3957 c-29 -31 -28 -72 3 -102 24 -25 26 -25 208 -25 171 0 186
1 211 21 33 26 36 79 6 109 -19 19 -33 20 -213 20 -189 0 -194 -1 -215 -23z"
                      />
                      <path
                        d="M3562 3957 c-29 -31 -28 -72 3 -102 l24 -25 549 0 c541 0 550 0 576
21 34 27 36 79 4 109 -21 20 -32 20 -578 20 l-557 0 -21 -23z"
                      />
                      <path
                        d="M2260 1500 c-19 -19 -20 -33 -20 -232 0 -229 6 -269 55 -352 59 -101
187 -181 307 -193 168 -15 327 78 401 235 l32 67 3 225 c3 217 3 226 -18 248
-27 29 -82 30 -109 1 -18 -20 -20 -39 -23 -233 -3 -193 -5 -214 -24 -251 -97
-180 -340 -190 -441 -17 -28 47 -28 49 -33 263 -4 195 -7 219 -24 238 -25 27
-79 28 -106 1z"
                      />
                    </g>
                  </svg>
                  Add Product
                </li>

                <li
                  className={deleteProduct ? "active" : ""}
                  onClick={() => {
                    dashboardLinks("DeleteProduct");
                  }}
                >
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                    fill="#ffffff"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        d="M229 5101 l-24 -19 0 -1017 0 -1017 24 -19 c23 -18 55 -19 1145 -19
1116 0 1122 0 1144 20 l22 21 0 1014 0 1014 -22 21 c-22 20 -28 20 -1144 20
-1090 0 -1122 -1 -1145 -19z m771 -306 l0 -165 -320 0 -320 0 0 165 0 165 320
0 320 0 0 -165z m590 -120 c0 -157 -1 -285 -3 -285 -2 0 -36 40 -76 89 -85
104 -121 126 -176 105 -9 -4 -52 -49 -96 -101 l-79 -94 0 285 0 286 215 0 215
0 0 -285z m800 120 l0 -165 -320 0 -320 0 0 165 0 165 320 0 320 0 0 -165z
m-1390 -480 c0 -163 0 -166 25 -190 52 -53 86 -34 229 135 l118 139 124 -145
c132 -152 156 -169 203 -143 44 25 51 52 51 217 l0 152 320 0 320 0 0 -655 0
-655 -1015 0 -1015 0 0 655 0 655 320 0 320 0 0 -165z"
                      />
                      <path
                        d="M3679 5040 c-24 -16 -244 -175 -489 -353 -378 -275 -446 -328 -454
-355 -6 -23 -5 -37 6 -54 16 -24 937 -699 982 -719 21 -10 30 -9 51 5 14 9 30
28 35 42 6 14 10 107 10 206 l0 181 79 -7 c43 -4 99 -13 124 -21 230 -69 371
-292 328 -517 -21 -104 -61 -175 -146 -256 -41 -40 -76 -80 -76 -90 -3 -39 3
-58 24 -76 28 -23 90 -17 195 18 208 71 372 215 467 411 229 469 -17 993 -540
1147 -56 16 -108 21 -262 25 l-192 5 -3 198 c-3 178 -5 200 -22 219 -26 29
-65 26 -117 -9z m-9 -351 c0 -83 4 -159 10 -169 18 -33 66 -40 274 -40 212 0
278 -9 379 -52 191 -81 353 -260 402 -444 18 -66 21 -213 6 -289 -24 -121 -80
-230 -169 -326 -35 -38 -72 -74 -81 -79 -16 -8 -16 -3 3 48 13 39 21 92 24
170 4 100 1 122 -22 195 -58 189 -193 326 -390 400 -74 28 -94 30 -236 35
-207 6 -198 14 -202 -197 l-3 -152 -355 260 c-195 144 -355 266 -355 272 0 10
692 518 708 519 4 0 7 -68 7 -151z"
                      />
                      <path
                        d="M25 2875 l-25 -24 0 -388 c1 -311 3 -392 14 -406 18 -23 68 -37 133
-37 46 0 53 -3 57 -22 3 -13 42 -336 86 -718 45 -382 88 -725 95 -762 27 -133
117 -278 228 -368 61 -49 141 -93 232 -127 48 -17 124 -18 1682 -21 1824 -3
1708 -7 1861 69 100 49 203 141 262 235 78 124 82 143 175 940 47 401 88 739
91 752 4 19 11 22 57 22 65 0 115 14 133 37 11 14 13 95 14 406 l0 388 -25 24
-24 25 -2511 0 -2511 0 -24 -25z m4935 -410 l0 -285 -2400 0 -2400 0 0 285 0
285 2400 0 2400 0 0 -285z m-200 -457 c0 -41 -162 -1422 -171 -1463 -29 -125
-135 -263 -249 -324 -122 -65 3 -61 -1776 -61 -1584 0 -1623 0 -1685 20 -157
48 -288 178 -337 336 -16 51 -43 258 -102 775 -44 388 -80 711 -80 717 0 9
526 12 2200 12 1753 0 2200 -3 2200 -12z"
                      />
                      <path
                        d="M2411 1840 c-159 -34 -281 -99 -397 -215 -102 -101 -156 -187 -201
-320 -25 -73 -27 -93 -27 -235 0 -144 1 -161 27 -235 44 -125 102 -220 192
-311 93 -94 187 -153 313 -197 82 -29 95 -31 242 -31 142 0 162 2 235 27 129
43 220 100 316 196 96 96 153 187 196 316 25 73 27 93 27 235 0 142 -2 162
-27 235 -45 133 -99 219 -201 320 -99 99 -190 154 -321 195 -79 25 -295 36
-374 20z m334 -170 c191 -59 345 -210 410 -403 24 -69 28 -99 29 -192 1 -188
-50 -312 -184 -445 -132 -132 -257 -184 -440 -184 -183 0 -308 52 -440 184
-134 133 -185 257 -184 445 1 93 5 123 29 192 110 325 454 503 780 403z"
                      />
                      <path
                        d="M2212 1417 c-45 -48 -34 -70 110 -214 l133 -133 -133 -133 c-145
-145 -155 -165 -107 -212 46 -47 66 -37 212 107 l133 132 133 -132 c146 -144
166 -154 212 -107 48 47 38 67 -107 212 l-133 133 133 133 c112 112 132 137
132 163 0 39 -36 74 -76 74 -24 0 -52 -23 -161 -132 l-133 -133 -133 133
c-112 112 -137 132 -163 132 -19 0 -39 -9 -52 -23z"
                      />
                    </g>
                  </svg>
                  Delete Product
                </li>
              </>
            ) : (
              <>
                <li
                  className={transfer ? "active" : ""}
                  onClick={() => {
                    dashboardLinks("Transfer");
                  }}
                >
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                    fill="#ffffff"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        d="M745 4615 l-25 -24 0 -456 0 -455 80 0 80 0 0 400 0 400 800 0 800 0
0 -200 0 -200 -95 0 c-88 0 -98 -2 -120 -25 -46 -45 -37 -66 111 -263 92 -123
144 -184 160 -188 52 -13 69 2 208 188 148 197 157 218 111 263 -22 23 -32 25
-120 25 l-95 0 0 255 0 256 -25 24 -24 25 -911 0 -911 0 -24 -25z m1858 -745
c-20 -27 -40 -50 -43 -50 -3 0 -23 23 -43 50 l-37 50 80 0 80 0 -37 -50z"
                      />
                      <path
                        d="M705 3426 c-116 -29 -207 -102 -260 -209 -75 -153 -52 -320 61 -446
l43 -48 -74 -6 c-40 -3 -94 -14 -119 -25 -64 -29 -139 -103 -167 -165 -24 -51
-24 -56 -27 -449 l-3 -398 81 0 80 0 0 378 c0 372 1 378 23 416 12 22 38 49
57 60 34 20 50 21 400 21 350 0 366 -1 400 -21 19 -11 45 -38 57 -60 22 -38
23 -44 23 -416 l0 -378 80 0 81 0 -3 398 c-3 393 -3 398 -27 449 -28 62 -103
136 -167 165 -25 11 -79 22 -120 25 l-74 6 41 44 c22 24 55 74 72 111 29 61
32 76 32 162 0 86 -3 101 -32 162 -40 84 -97 147 -170 186 -96 50 -189 62
-288 38z m163 -161 c207 -62 231 -346 37 -440 -111 -55 -244 -16 -310 89 -26
43 -30 59 -30 120 1 84 24 137 82 185 37 31 107 59 149 60 11 1 44 -6 72 -14z"
                      />
                      <path
                        d="M4198 3421 c-134 -44 -229 -145 -264 -282 -34 -131 4 -275 97 -371
l44 -46 -80 -5 c-133 -8 -230 -70 -285 -182 l-25 -50 -3 -402 -3 -403 80 0 80
0 3 389 c3 376 4 391 24 417 11 15 33 37 48 48 27 20 39 21 406 21 367 0 379
-1 406 -21 15 -11 37 -33 48 -48 20 -26 21 -41 24 -417 l3 -389 80 0 80 0 -3
403 -3 402 -34 63 c-59 109 -144 161 -276 169 l-80 5 44 46 c113 117 141 295
69 449 -34 73 -131 165 -203 193 -83 32 -201 36 -277 11z m196 -153 c86 -26
166 -136 166 -228 0 -124 -116 -240 -240 -240 -63 0 -114 23 -165 75 -102 101
-102 229 0 330 70 71 145 90 239 63z"
                      />
                      <path
                        d="M2200 3170 c-184 -104 -340 -197 -347 -206 -10 -14 -13 -107 -13
-405 0 -354 1 -388 18 -407 24 -28 676 -392 702 -392 27 0 678 363 703 392 16
18 17 53 17 408 0 355 -1 390 -17 408 -27 30 -677 392 -704 392 -13 -1 -175
-86 -359 -190z m604 -119 c131 -73 234 -137 229 -141 -7 -7 -420 -270 -461
-294 -13 -8 -497 292 -487 302 10 10 470 270 476 268 3 0 112 -61 243 -135z
m-551 -438 l227 -145 0 -244 0 -245 -78 43 c-43 24 -151 84 -240 133 l-161 90
-1 263 c0 208 3 262 13 256 6 -4 114 -72 240 -151z m867 -105 l0 -263 -162
-90 c-89 -49 -196 -110 -240 -133 l-78 -44 0 245 0 245 238 151 c130 83 238
151 240 151 1 0 2 -118 2 -262z"
                      />
                      <path d="M400 2040 l0 -360 80 0 80 0 0 360 0 360 -80 0 -80 0 0 -360z" />
                      <path d="M1040 2040 l0 -360 80 0 80 0 0 360 0 360 -80 0 -80 0 0 -360z" />
                      <path d="M3920 2040 l0 -360 80 0 80 0 0 360 0 360 -80 0 -80 0 0 -360z" />
                      <path d="M4560 2040 l0 -360 80 0 80 0 0 360 0 360 -80 0 -80 0 0 -360z" />
                      <path
                        d="M2480 985 l0 -536 25 -24 24 -25 911 0 911 0 24 25 25 24 0 256 0
255 95 0 c88 0 98 2 120 25 45 45 36 66 -105 256 -143 191 -169 213 -220 188
-18 -9 -78 -79 -160 -188 -141 -190 -150 -211 -105 -256 22 -23 32 -25 120
-25 l95 0 0 -200 0 -200 -800 0 -800 0 0 480 0 480 -80 0 -80 0 0 -535z m1883
185 l37 -50 -80 0 -80 0 37 50 c20 28 40 50 43 50 3 0 23 -22 43 -50z"
                      />
                    </g>
                  </svg>
                  Transfer
                </li>
                <li
                  className={transferHistory ? "active" : ""}
                  onClick={() => {
                    dashboardLinks("TransferHistory");
                  }}
                >
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                    fill="#ffffff"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        d="M1048 4790 c-302 -52 -557 -304 -608 -600 -7 -46 -10 -582 -8 -1855
l3 -1790 23 -43 c35 -66 88 -119 150 -149 l57 -28 1470 0 1470 0 63 34 c70 38
100 69 140 145 l27 51 3 842 3 843 385 0 c422 0 430 1 454 59 7 18 10 347 8
1056 l-3 1030 -22 58 c-59 156 -178 274 -333 329 l-65 23 -1585 1 c-872 1
-1606 -2 -1632 -6z m2682 -205 c0 -3 -11 -23 -25 -43 -47 -72 -67 -148 -77
-297 -5 -83 -6 -852 -2 -1876 6 -1620 5 -1738 -11 -1772 -34 -72 74 -67 -1479
-67 -1530 0 -1448 -3 -1480 59 -15 28 -16 203 -14 1803 l3 1773 25 65 c33 85
90 170 148 221 62 55 191 117 267 128 63 9 2645 15 2645 6z m591 -43 c53 -32
106 -92 131 -147 l23 -50 3 -947 2 -948 -320 0 -320 0 2 948 3 947 23 50 c27
59 80 117 139 152 81 47 234 45 314 -5z"
                      />
                      <path
                        d="M1427 4259 c-103 -24 -179 -87 -224 -184 l-28 -60 -3 -565 c-3 -601
0 -650 43 -726 33 -57 103 -118 161 -140 47 -18 85 -19 764 -19 l715 0 57 28
c62 30 115 83 150 149 l23 43 3 611 c3 600 2 613 -18 668 -27 70 -93 139 -168
174 l-57 27 -690 2 c-382 1 -707 -3 -728 -8z m283 -493 c0 -269 1 -285 20
-309 11 -14 36 -31 54 -37 31 -10 51 -6 192 41 l158 52 161 -53 c157 -51 162
-52 197 -37 65 27 68 42 68 352 l0 275 120 0 c130 0 158 -8 183 -50 15 -25 17
-83 17 -585 0 -617 1 -603 -65 -631 -50 -21 -1309 -21 -1359 0 -69 29 -66 -2
-66 634 l0 574 29 29 29 29 131 0 131 0 0 -284z m640 94 c0 -104 -1 -190 -3
-190 -2 0 -43 14 -92 30 -49 17 -103 30 -120 30 -17 0 -71 -13 -120 -30 -49
-16 -90 -30 -92 -30 -2 0 -3 86 -3 190 l0 190 215 0 215 0 0 -190z"
                      />
                      <path
                        d="M1030 2233 c-81 -31 -90 -157 -14 -192 34 -15 494 -15 528 0 60 28
71 122 20 170 -25 24 -27 24 -272 26 -136 1 -254 -1 -262 -4z"
                      />
                      <path
                        d="M1758 2223 c-56 -35 -66 -117 -19 -164 l29 -29 735 0 c721 0 735 0
760 20 38 30 52 80 33 123 -29 70 5 67 -793 67 -651 -1 -720 -2 -745 -17z"
                      />
                      <path
                        d="M1023 1695 c-33 -14 -63 -59 -63 -95 0 -37 30 -81 65 -96 29 -12 203
-14 1111 -14 1193 0 1126 -4 1158 65 20 41 20 49 0 90 -32 69 35 65 -1161 65
-896 -1 -1083 -3 -1110 -15z"
                      />
                      <path
                        d="M1013 1158 c-57 -28 -67 -122 -17 -169 l26 -24 459 -3 c513 -3 507
-4 535 65 19 43 5 93 -33 123 -25 19 -39 20 -487 19 -298 0 -469 -4 -483 -11z"
                      />
                      <path
                        d="M2177 1150 c-38 -30 -52 -80 -33 -123 28 -68 18 -67 576 -67 558 0
548 -1 576 67 19 43 5 93 -33 123 -25 19 -40 20 -543 20 -503 0 -518 -1 -543
-20z"
                      />
                    </g>
                  </svg>
                  Transfer History
                </li>
                <li
                  className={stock ? "active" : ""}
                  onClick={() => {
                    dashboardLinks("RequestStock");
                  }}
                >
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                    fill="#ffffff"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        d="M2475 5071 c-27 -10 -295 -150 -594 -312 -485 -262 -549 -299 -578
-337 -64 -84 -63 -76 -63 -813 l0 -668 -157 -85 c-87 -47 -338 -181 -558 -299
-445 -238 -481 -263 -509 -358 -14 -46 -16 -143 -16 -729 0 -769 -3 -739 79
-819 37 -36 152 -98 591 -322 300 -152 565 -282 590 -289 25 -7 65 -9 90 -6
48 7 447 202 488 239 13 12 22 32 22 49 0 34 -39 78 -69 78 -11 0 -103 -43
-205 -95 -101 -52 -187 -95 -190 -95 -3 0 -5 302 -4 670 l3 671 538 274 c296
151 540 275 543 275 2 0 4 -301 4 -669 l0 -670 -202 -103 c-112 -56 -213 -113
-225 -125 -13 -12 -23 -34 -23 -48 0 -31 41 -75 71 -75 11 0 120 50 242 112
l220 112 61 -32 c34 -18 297 -153 586 -300 l525 -267 70 0 70 0 370 190 c204
104 456 232 560 285 215 110 271 154 298 235 15 43 17 120 17 725 0 586 -2
683 -16 729 -26 88 -77 128 -336 266 l-225 120 14 40 c30 84 45 174 45 272 0
173 -28 253 -90 253 -61 0 -88 -44 -71 -118 16 -71 13 -218 -6 -292 -30 -120
-81 -206 -175 -300 -131 -131 -273 -192 -450 -193 -108 0 -186 16 -278 59
-279 128 -430 428 -367 729 38 184 176 361 345 444 254 124 541 80 751 -116
36 -33 58 -46 79 -46 43 0 70 28 70 73 0 32 -8 44 -52 87 -318 298 -806 296
-1114 -7 -107 -105 -162 -194 -209 -340 -25 -76 -28 -100 -29 -225 -1 -134 11
-207 49 -306 6 -15 -9 -24 -317 -189 l-98 -52 0 669 0 668 531 270 c292 149
537 271 545 273 12 3 14 -20 14 -141 0 -137 1 -144 23 -165 29 -27 67 -28 98
-3 24 19 24 22 24 208 l0 188 -30 54 c-16 30 -46 67 -65 82 -50 39 -1108 605
-1156 618 -54 15 -91 13 -149 -8z m638 -415 c284 -152 517 -281 517 -284 0 -4
-241 -129 -535 -278 l-534 -272 -541 275 -541 275 373 200 c205 110 443 238
528 285 115 62 163 83 185 81 17 -2 263 -129 548 -282z m-1163 -691 l530 -270
0 -668 0 -668 -22 12 c-64 34 -980 525 -1020 548 l-48 26 0 648 c0 573 2 648
15 645 8 -2 254 -124 545 -273z m-94 -1442 c294 -158 534 -289 534 -292 0 -4
-242 -129 -537 -278 l-536 -273 -306 156 c-168 86 -411 211 -539 276 l-234
120 534 288 c293 158 537 288 542 289 4 1 248 -128 542 -286z m1326 -133 c102
-127 261 -228 423 -270 59 -16 111 -21 195 -21 143 0 238 22 370 88 83 41 109
61 202 154 l107 107 200 -106 c110 -59 196 -110 193 -113 -4 -4 -246 -129
-537 -278 l-531 -270 -537 272 c-295 150 -537 274 -537 277 0 7 393 220 401
217 3 -1 26 -27 51 -57z m-2482 -563 l535 -272 3 -673 2 -673 -456 232 c-594
301 -596 302 -616 336 -17 26 -18 77 -18 676 0 356 3 647 8 647 4 0 248 -123
542 -273z m2496 -5 l529 -271 3 -670 c1 -369 -1 -671 -4 -671 -4 0 -84 40
-178 89 -94 48 -336 173 -538 275 l-368 187 0 671 c0 549 2 669 13 665 7 -3
251 -127 543 -275z m1774 -367 c0 -551 -2 -650 -15 -675 -18 -36 -22 -38 -598
-329 l-477 -242 2 672 3 673 535 273 c294 150 538 273 543 273 4 0 7 -290 7
-645z"
                      />
                      <path
                        d="M4105 3160 c-17 -6 -242 -237 -367 -374 l-35 -40 -107 97 c-85 78
-112 97 -136 97 -40 0 -70 -31 -70 -74 0 -31 13 -46 140 -165 122 -114 145
-131 174 -131 30 0 50 17 207 183 303 317 292 304 292 338 0 49 -54 87 -98 69z"
                      />
                    </g>
                  </svg>
                  Request Stock
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="right-db">
          <div className="avilabletest-front-buttons">
            <button
              id="product-btn"
              onClick={() => {
                setProduct(true);
                setaddProduct(true);
                setChain(false);
                setDeleteProduct(false);
                setTransfer(false);
                setTransferHistory(false);
              }}
              for="first_name"
              className={product ? "active" : ""}
              value={product}
            >
              product
            </button>

            <button
              id="chain-btn"
              onClick={() => {
                setChain(true);
                setProduct(false);
                setaddProduct(false);
                setDeleteProduct(false);
                setTransfer(true);
                setTransferHistory(false);
                // showAvailableTests();
              }}
              for="first_name"
              className={chain ? "active" : ""}
              value={chain}
            >
              chain
            </button>
          </div>

          {addProduct ? (
            <>
              <div className="select-main" id="right-db-inside">
                <div className="product-details-main">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <TextField
                      helperText=" "
                      id="demo-helper-text-aligned-no-helper"
                      label="Product name"
                    />
                    <TextField
                      helperText=" "
                      id="demo-helper-text-aligned-no-helper product-dec"
                      className="product-dec"
                      label="Product description"
                    />
                    <TextField
                      helperText=" "
                      id="demo-helper-text-aligned-no-helper"
                      label="Product price"
                    />
                    <TextField
                      helperText=" "
                      id="demo-helper-text-aligned-no-helper"
                      label="Product unit"
                    />
                    <Button
                      variant="contained"
                      size="large"
                      className="product-btn"
                      onClick={toastInfo}
                    >
                      Add
                    </Button>
                    <ToastContainer
                      position="bottom-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
                  </Box>
                </div>
              </div>
            </>
          ) : deleteProduct ? (
            <DeleteProduct />
          ) : transfer ? (
            <Transfer />
          ) : transferHistory ? (
            <TransferHistory dashboardLinks={dashboardLinks} />
          ) : transferHistoryDetails ? (
            <HistoryDetails
              setTransferHistoryDetails={setTransferHistoryDetails}
            />
          ) : stock ? (
            <RequestStock />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
