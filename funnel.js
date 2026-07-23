/* Goodword — onboarding funnel bundle (v8, Jul 22). Tiny-loader; Shadow-DOM; cream + green (clay=action).
 * Flow: goal → value → refine → search → role → sell (6 steps).
 * v8: Imagine restored; opener top-aligned (options near headline); options aligned to "My next ___" (6);
 * integration icons unfold slower → converge into Goodword logo → reappear (more padding); value beat-3 removed;
 * caption "Who you need, when you need them."; refine categories cleaned to be concise/MECE/article-free so the
 * built query reads grammatically (sanity-checked). TODO: real product screenshots; founder copy+proof; Domaine confirm.
 */
(function () {
  var mount = document.getElementById("gw-funnel");
  if (!mount) return;
  var REDUCE = false;
  try { REDUCE = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  window.__GW_ICONS = {"linkedin":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" color=\"#0A66C2\" fill=\"none\" > <path d=\"M19.211 19.0413H16.2181V14.4004C16.2181 13.2937 16.1981 11.8691 14.6614 11.8691C13.1026 11.8691 12.8641 13.0749 12.8641 14.3199V19.041H9.87114V9.49741H12.7444V10.8016H12.7846C13.0721 10.3148 13.4877 9.91439 13.9869 9.64291C14.4861 9.37143 15.0503 9.23911 15.6195 9.26003C18.653 9.26003 19.2123 11.2357 19.2123 13.8059L19.211 19.0413ZM6.4941 8.19287C6.15058 8.19293 5.81476 8.09213 5.5291 7.90321C5.24344 7.71429 5.02079 7.44574 4.88928 7.13153C4.75776 6.81731 4.7233 6.47153 4.79025 6.13792C4.85721 5.80431 5.02258 5.49785 5.26544 5.2573C5.5083 5.01675 5.81774 4.8529 6.15465 4.78649C6.49155 4.72007 6.84077 4.75406 7.15816 4.88417C7.47555 5.01428 7.74685 5.23465 7.93775 5.51743C8.12865 5.8002 8.23058 6.13268 8.23064 6.47282C8.23068 6.69866 8.18579 6.92229 8.09854 7.13095C8.01129 7.33962 7.88341 7.52922 7.72215 7.68895C7.5609 7.84867 7.36944 7.97538 7.15873 8.06184C6.94802 8.1483 6.72219 8.19282 6.4941 8.19287ZM7.99057 19.0413H4.99451V9.49741H7.99057V19.0413ZM20.7031 2.00136H3.49055C3.09988 1.997 2.72341 2.14639 2.44392 2.4167C2.16443 2.68702 2.00477 3.05614 2 3.44297V20.5567C2.0046 20.9438 2.16417 21.3131 2.44365 21.5837C2.72314 21.8543 3.09968 22.004 3.49055 21.9999H20.7031C21.0948 22.0047 21.4724 21.8555 21.753 21.5849C22.0336 21.3143 22.1942 20.9445 22.1996 20.5567V3.44174C22.194 3.05414 22.0333 2.6846 21.7527 2.41429C21.4721 2.14398 21.0946 1.99502 20.7031 2.00013\" fill=\"currentColor\" /> </svg>","gmail":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 12\" fill=\"none\" > <path d=\"M1.089 12H3.633V5.817L0 3.094V10.917C0 11.514 .492 12 1.089 12Z\" fill=\"#4285F4\" /> <path d=\"M12.366 12H14.91C15.518 12 16 11.503 16 10.907V3.094L12.366 5.817V12Z\" fill=\"#34A853\" /> <path d=\"M12.366 1.094V5.817L16 3.094V1.639C16 .288 14.461-.477 13.382.33L12.366 1.094Z\" fill=\"#FBBC04\" /> <path d=\"M3.633 5.817V1.094L8 4.372 12.366 1.094V5.817L8 9.084 3.633 5.817Z\" fill=\"#EA4335\" /> <path d=\"M0 1.639V3.094L3.634 5.817V1.094L2.619.33C1.539-.476 0 .299 0 1.639Z\" fill=\"#C5221F\" /> </svg>","google-calendar":"<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"20\" height=\"20\" viewBox=\"0 0 200 200\" > <g> <g transform=\"translate(3.75 3.75)\"> <path fill=\"#FFFFFF\" d=\"M148.882,43.618l-47.368-5.263l-57.895,5.263L38.355,96.25l5.263,52.632l52.632,6.579l52.632-6.579 l5.263-53.947L148.882,43.618z\" /> <path fill=\"#1A73E8\" d=\"M65.211,125.276c-3.934-2.658-6.658-6.539-8.145-11.671l9.132-3.763c0.829,3.158,2.276,5.605,4.342,7.342 c2.053,1.737,4.553,2.592,7.474,2.592c2.987,0,5.553-0.908,7.697-2.724s3.224-4.132,3.224-6.934c0-2.868-1.132-5.211-3.395-7.026 s-5.105-2.724-8.5-2.724h-5.276v-9.039H76.5c2.921,0,5.382-0.789,7.382-2.368c2-1.579,3-3.737,3-6.487 c0-2.447-0.895-4.395-2.684-5.855s-4.053-2.197-6.803-2.197c-2.684,0-4.816,0.711-6.395,2.145s-2.724,3.197-3.447,5.276 l-9.039-3.763c1.197-3.395,3.395-6.395,6.618-8.987c3.224-2.592,7.342-3.895,12.342-3.895c3.697,0,7.026,0.711,9.974,2.145 c2.947,1.434,5.263,3.421,6.934,5.947c1.671,2.539,2.5,5.382,2.5,8.539c0,3.224-0.776,5.947-2.329,8.184 c-1.553,2.237-3.461,3.947-5.724,5.145v0.539c2.987,1.25,5.421,3.158,7.342,5.724c1.908,2.566,2.868,5.632,2.868,9.211 s-0.908,6.776-2.724,9.579c-1.816,2.803-4.329,5.013-7.513,6.618c-3.197,1.605-6.789,2.421-10.776,2.421 C73.408,129.263,69.145,127.934,65.211,125.276z\" /> <path fill=\"#1A73E8\" d=\"M121.25,79.961l-9.974,7.25l-5.013-7.605l17.987-12.974h6.895v61.197h-9.895L121.25,79.961z\" /> <path fill=\"#EA4335\" d=\"M148.882,196.25l47.368-47.368l-23.684-10.526l-23.684,10.526l-10.526,23.684L148.882,196.25z\" /> <path fill=\"#34A853\" d=\"M33.092,172.566l10.526,23.684h105.263v-47.368H43.618L33.092,172.566z\" /> <path fill=\"#4285F4\" d=\"M12.039-3.75C3.316-3.75-3.75,3.316-3.75,12.039v136.842l23.684,10.526l23.684-10.526V43.618h105.263 l10.526-23.684L148.882-3.75H12.039z\" /> <path fill=\"#188038\" d=\"M-3.75,148.882v31.579c0,8.724,7.066,15.789,15.789,15.789h31.579v-47.368H-3.75z\" /> <path fill=\"#FBBC04\" d=\"M148.882,43.618v105.263h47.368V43.618l-23.684-10.526L148.882,43.618z\" /> <path fill=\"#1967D2\" d=\"M196.25,43.618V12.039c0-8.724-7.066-15.789-15.789-15.789h-31.579v47.368H196.25z\" /> </g> </g> </svg>","outlook":"<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" > <g clip-path=\"url(#clip0_0_142)\"> <g clip-path=\"url(#clip1_0_142)\"> <path d=\"M127.542 66.6442C127.549 65.6433 127.032 64.7117 126.179 64.1884H126.164L126.11 64.1586L81.7569 37.9037C81.5653 37.7743 81.3666 37.6561 81.1615 37.5495C79.449 36.666 77.4147 36.666 75.7021 37.5495C75.4971 37.6561 75.2983 37.7743 75.1068 37.9037L30.7534 64.1586L30.6999 64.1884C29.3443 65.0313 28.9287 66.8137 29.7717 68.1693C30.0201 68.5687 30.3622 68.9014 30.7683 69.1387L75.1218 95.3936C75.314 95.5218 75.5127 95.6401 75.7172 95.7478C77.4297 96.6313 79.464 96.6313 81.1765 95.7478C81.381 95.6401 81.5797 95.5219 81.7719 95.3936L126.125 69.1387C127.011 68.6221 127.552 67.6699 127.542 66.6442Z\" fill=\"#0A2767\" /> <path d=\"M35.924 49.1141H65.0306V75.7947H35.924V49.1141ZM121.589 21.993V9.78838C121.659 6.73693 119.243 4.20571 116.192 4.13259H40.6601C37.6086 4.20571 35.1933 6.73693 35.2632 9.78838V21.993L79.9143 33.9L121.589 21.993Z\" fill=\"#0364B8\" /> <path d=\"M35.2634 21.993H65.0308V48.7837H35.2634V21.993Z\" fill=\"#0078D4\" /> <path d=\"M94.7982 21.993H65.0308V48.7837L94.7982 75.5744H121.589V48.7837L94.7982 21.993Z\" fill=\"#28A8EA\" /> <path d=\"M65.0308 48.7837H94.7982V75.5744H65.0308V48.7837Z\" fill=\"#0078D4\" /> <path d=\"M65.0308 75.5744H94.7982V102.365H65.0308V75.5744Z\" fill=\"#0364B8\" /> <path d=\"M35.9243 75.7947H65.0309V100.049H35.9243V75.7947Z\" fill=\"#14447D\" /> <path d=\"M94.7983 75.5744H121.589V102.365H94.7983V75.5744Z\" fill=\"#0078D4\" /> <path d=\"M126.179 68.975L126.122 69.0047L81.7687 93.9498C81.5752 94.0689 81.3788 94.182 81.1733 94.2832C80.42 94.6419 79.6018 94.8444 78.7681 94.8786L76.345 93.4616C76.1403 93.3589 75.9415 93.2446 75.7497 93.1193L30.8009 67.4657H30.7801L29.3096 66.6442V117.142C29.3325 120.511 32.0815 123.224 35.4506 123.202H121.496C121.547 123.202 121.592 123.178 121.645 123.178C122.357 123.133 123.058 122.987 123.729 122.744C124.019 122.621 124.298 122.476 124.565 122.309C124.765 122.196 125.107 121.949 125.107 121.949C126.632 120.821 127.534 119.039 127.542 117.142V66.6442C127.541 67.61 127.02 68.5006 126.179 68.975Z\" fill=\"url(#paint0_linear_0_142)\" /> <path opacity=\"0.5\" d=\"M125.161 66.4447V69.5406L78.7832 101.472L30.7683 67.4866C30.7683 67.4702 30.755 67.4568 30.7386 67.4568L26.333 64.8075V62.5749L28.1488 62.5451L31.9888 64.748L32.0781 64.7777L32.4055 64.9861C32.4055 64.9861 77.5329 90.7349 77.652 90.7944L79.3785 91.8065C79.5273 91.747 79.6761 91.6875 79.8547 91.6279C79.9441 91.5683 124.655 66.4149 124.655 66.4149L125.161 66.4447Z\" fill=\"#0A2767\" /> <path d=\"M126.179 68.975L126.123 69.0077L81.7691 93.9528C81.5756 94.0718 81.3792 94.1849 81.1737 94.2861C79.4512 95.1276 77.4369 95.1276 75.7144 94.2861C75.5104 94.1851 75.3117 94.0738 75.119 93.9528L30.7657 69.0077L30.7121 68.975C29.8558 68.5107 29.3189 67.6182 29.3101 66.6442V117.142C29.3314 120.51 32.0794 123.224 35.4478 123.202C35.4478 123.202 35.448 123.202 35.4481 123.202H121.404C124.773 123.224 127.521 120.51 127.543 117.142C127.543 117.142 127.543 117.142 127.543 117.142V66.6442C127.541 67.61 127.02 68.5006 126.179 68.975Z\" fill=\"#1490DF\" /> <path opacity=\"0.1\" d=\"M82.4148 93.5837L81.751 93.9558C81.5586 94.0782 81.3599 94.1906 81.1556 94.2921C80.4243 94.6511 79.629 94.8616 78.8159 94.9113L95.6911 114.867L125.128 121.961C125.935 121.352 126.576 120.55 126.995 119.63L82.4148 93.5837Z\" fill=\"black\" /> <path opacity=\"0.05\" d=\"M85.4213 91.8929L81.751 93.9558C81.5586 94.0782 81.3599 94.1906 81.1556 94.2921C80.4243 94.6511 79.629 94.8616 78.8159 94.9113L86.7221 116.71L125.137 121.952C126.65 120.816 127.541 119.034 127.542 117.142V116.49L85.4213 91.8929Z\" fill=\"black\" /> <path d=\"M35.5314 123.202H121.396C122.717 123.209 124.005 122.792 125.072 122.012L76.3425 93.4676C76.1378 93.3649 75.939 93.2506 75.7472 93.1253L30.7984 67.4717H30.7776L29.3101 66.6442V116.969C29.3067 120.408 32.0921 123.199 35.5314 123.202Z\" fill=\"#28A8EA\" /> <path opacity=\"0.1\" d=\"M70.984 33.4029V96.8968C70.9787 99.123 69.625 101.124 67.5607 101.957C66.9212 102.232 66.2325 102.374 65.5365 102.374H29.3096V30.9233H35.2631V27.9465H65.5366C68.5438 27.9579 70.9775 30.3956 70.984 33.4029Z\" fill=\"black\" /> <path opacity=\"0.2\" d=\"M68.0073 36.3796V99.8735C68.0147 100.593 67.8623 101.304 67.5607 101.957C66.734 103.995 64.7588 105.332 62.5598 105.342H29.3096V30.9233H62.5598C63.4235 30.9146 64.2747 31.13 65.0305 31.5484C66.8552 32.4677 68.0066 34.3364 68.0073 36.3796Z\" fill=\"black\" /> <path opacity=\"0.2\" d=\"M68.0073 36.3796V93.92C67.9927 96.9259 65.5657 99.3623 62.5599 99.3883H29.3096V30.9233H62.5598C63.4235 30.9146 64.2747 31.13 65.0305 31.5484C66.8552 32.4677 68.0066 34.3364 68.0073 36.3796Z\" fill=\"black\" /> <path opacity=\"0.2\" d=\"M65.0305 36.3796V93.92C65.0273 96.9306 62.5935 99.3736 59.5831 99.3883H29.3096V30.9233H59.583C62.5932 30.9249 65.0321 33.3665 65.0304 36.3767C65.0305 36.3777 65.0305 36.3786 65.0305 36.3796Z\" fill=\"black\" /> <path d=\"M4.99883 30.9233H59.5744C62.5879 30.9233 65.0308 33.3662 65.0308 36.3796V90.9552C65.0308 93.9687 62.5879 96.4116 59.5744 96.4116H4.99883C1.98534 96.4116 -0.45752 93.9686 -0.45752 90.9552V36.3796C-0.45752 33.3662 1.98541 30.9233 4.99883 30.9233Z\" fill=\"url(#paint1_linear_0_142)\" /> <path d=\"M16.5963 53.8085C17.9411 50.9433 20.1118 48.5455 22.8296 46.9233C25.8395 45.2001 29.2665 44.341 32.7333 44.4406C35.9464 44.371 39.117 45.1855 41.8987 46.7952C44.5141 48.3549 46.6205 50.6402 47.9623 53.3738C49.4235 56.386 50.1518 59.701 50.0877 63.0482C50.1585 66.5464 49.4092 70.0126 47.8998 73.1691C46.526 76.0005 44.3528 78.3672 41.6486 79.9769C38.7597 81.636 35.4714 82.4719 32.1409 82.3941C28.8591 82.4733 25.6187 81.6495 22.7731 80.0127C20.1351 78.4509 18.0022 76.163 16.6291 73.4221C15.1592 70.4535 14.4222 67.1759 14.4799 63.8638C14.4187 60.3954 15.1422 56.958 16.5963 53.8085ZM23.2404 69.9721C23.9574 71.7835 25.1733 73.3544 26.747 74.5028C28.3499 75.623 30.2692 76.201 32.2242 76.1519C34.3061 76.2342 36.3583 75.6365 38.0705 74.4491C39.6243 73.3045 40.8082 71.7293 41.4759 69.9185C42.2222 67.8964 42.5906 65.7542 42.5624 63.5989C42.5855 61.423 42.2392 59.259 41.5384 57.199C40.9194 55.339 39.7736 53.6989 38.2402 52.4779C36.5709 51.2343 34.5242 50.6035 32.4444 50.6918C30.4471 50.6401 28.4848 51.2226 26.8393 52.3558C25.239 53.5089 24 55.0938 23.2672 56.9251C21.6416 61.1227 21.6331 65.7746 23.2433 69.9781L23.2404 69.9721Z\" fill=\"white\" /> <path d=\"M94.7983 21.993H121.589V48.7837H94.7983V21.993Z\" fill=\"#50D9FF\" /> </g> </g> <defs> <linearGradient id=\"paint0_linear_0_142\" x1=\"78.4258\" y1=\"66.6442\" x2=\"78.4258\" y2=\"123.202\" gradientUnits=\"userSpaceOnUse\" > <stop stopColor=\"#35B8F1\" /> <stop offset=\"1\" stopColor=\"#28A8EA\" /> </linearGradient> <linearGradient id=\"paint1_linear_0_142\" x1=\"10.9191\" y1=\"26.6598\" x2=\"53.6542\" y2=\"100.675\" gradientUnits=\"userSpaceOnUse\" > <stop stopColor=\"#1784D9\" /> <stop offset=\"0.5\" stopColor=\"#107AD5\" /> <stop offset=\"1\" stopColor=\"#0A63C9\" /> </linearGradient> <clipPath id=\"clip0_0_142\"> <rect width=\"128\" height=\"128\" fill=\"white\" /> </clipPath> <clipPath id=\"clip1_0_142\"> <rect width=\"128\" height=\"119.07\" fill=\"white\" transform=\"translate(-0.45752 4.13259)\" /> </clipPath> </defs> </svg>","google-contacts":"<svg version=\"1.1\" id=\"logo_x5F_contacts_x5F_192px_1_\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 500 500\" enableBackground=\"new 0 0 500 500\" xmlSpace=\"preserve\" > <g id=\"art_layer\"> <circle id=\"bg_circle\" fill=\"#1A73E8\" cx=\"250\" cy=\"250\" r=\"250\" /> <path id=\"body_shadow\" fill=\"#185ABC\" d=\"M332.4,375H170.5c-19.6,0-36.9-11.8-36.9-31.2V358c0,19.4,17.3,34.1,36.9,34.1h161.9 c19.6,0,36.9-14.7,36.9-34.1v-14.2C369.3,363.2,352,375,332.4,375z\" /> <path id=\"head_shadow\" fill=\"#185ABC\" d=\"M250,227.3c-29.3-0.1-52.4-20.4-54-48.3v11.4c0,28.9,24.2,54,54,54s54-25.1,54-54V179 C301.7,207.1,279.3,227.4,250,227.3z\" /> <g id=\"subject\"> <path id=\"body\" fill=\"#FFFFFF\" d=\"M250,261.4c-57,0-116.5,27.8-116.5,65.3v17c0,19.4,15.9,34.1,35.5,34.1h164.7 c19.6,0,35.5-14.7,35.5-34.1v-17C369.3,289.1,307,261.4,250,261.4z\" /> <circle id=\"head\" fill=\"#FFFFFF\" cx=\"250\" cy=\"176.1\" r=\"54\" /> </g> </g> </svg>","luma":"<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" > <path d=\"M127.57 64C92.46 64 64 35.54 64 .43 64 35.54 35.54 64 .43 64 35.54 64 64 92.46 64 127.57 64 92.46 92.46 64 127.57 64z\" fill=\"currentColor\" /> </svg>","instagram":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" > <path d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z\" fill=\"currentColor\" /> </svg>","x":"<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#111\" d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/></svg>","granola":"<img alt=\"Granola\" style=\"width:26px;height:26px;border-radius:6px;display:block\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEWywkgeHh7///+1xUm3x0kAABocHB4YFx0AABgaGR0SEBy7zEsUEhwQDRwWFR2uvkcIABuot0X5+vLk6sjW3qbO15PF0X7AzW2tvjavwD7t8drj6MKpuySZpkALBhu1xE8/QyZVWyyfrUKToD+7yWKBjDliajBKTyklJiB5gzdaYS0vMSJPVSprdDKHkztFSig0NyOUyzFWAAAKRElEQVR4nM1ciXabOhCFJ7EIEEvatElaKEvAbAL+/+sexImRhGwDxjH39Jz61LW4mhmNZkaDpP9GPL39+Pn86/f7v3//pG9C/6j337+ef/54e6KISCOl5/fXl5fX1+/iM+K1fy54f36akHp6fnkAHYbay4nWJ6m395fHUhrw8v5Gk/rz98FiOuL175+R1J9dUBrw+ueL1NvfR3MZ8fftSOrpfTeC6kX1/vRB6nkHNj7i5Xkg9bQrTj2rp57U846UN+D1+T/p6f3RLHi8P0lv4NEkeLy+ST92ZlK9Uf2Qfu6P1E9pb3Y+WLr0a3+kfkm/H81hit/S7jxC7xOkb4t85+PfhqQAgJ+40fVtQqonIzmO5/lNk6Zp0ySx5zn9v67ldjMlCE3HT0nZVljXlSP6D3kYkdSXzFuFthwASl5CQhkZhmEjmYaqWYaF5LaInW/l1YsoLSsl0FT5HFRbCUKS3GxkMwGgk9RoEMY1aIZREa8X6t0pmR7pFOsqoU8gRY16cd2XEogj27guI1qPFq6ae4rL9Eo7WMLoS1wVae5kXNDLDOO8aV+kZeiRdwdhATPt3BnPV8/QtvJic1YwbpULtqTaOAgwtpCa5/Lw2Z5wQ/bGrABMVeOcamxX19W2JEWTJP4HmoK0hq7wXlX3t2QFvYMi1gpyta4ukt6dfuzGn+g/mtBLow4FNC872tDYYRwK1xwK9KpIPGAKBdBT83yS6+PawBuSgo1uCyjZbke8K9sugKZfVq728YOg2oySZBaWQHWa3qXeHN8Dej1WemAoehRvZlKA6CJTahOx0kSAZkyy1DM3U56ZCcwp0FJp0azB7TEpPVo2lZONyJ232MswyVROuPK/P6ikANOJnFQ3e6iYJJhMNhYUFOChtRrguTwpO/fNR1LqUfMBJu62czXrAAveoIKDc151w45n9oCff91Hy2ancXI6SGce1PMBTpwUpKwPbdse6pI0vgO2T2WAw4V0VivmBKHjF2U3JKTYsjWEkGYbrqIrXZn663NlIWCK2XWXe4Lx+4QgKTs5MAQpIDKwHBZbZqTA69ilpzRTGwcwJpV+IW5XkYLLeDNaZs36ciMSUPLKPLiWb6k43ypnAL7CGlQ1WXjQITiYk9youI/OtxAWyBgfhfJJeA2TDs/Nt1R82MLBeTLzQCXhxgSgcLVzHAQwDH6E5YApo72g5DYX4ESzNDcCGTcnWGZIR+VqHrMmAZx2efauk9vsCnhMpmBk7CSBE2LBU1XbwNg+n9nj7CZZcY5T59wmOEw4qX1GaoR9QpoW0eDb+z9TcvptGizptWfUrEXBktedhvO28J1hywHDLug5TpxGlcFHGcEtrFhvHiSMoGDByQkpXRpDKlcZPvUZn9ccFDZhVJX1iTvw6b0YdR7DyXcZvSCj67N2kQ33QvM54+vHWmvtsKAdgsXap9OxiwBfyragU7C1miBaG7maTMjJ1kogm98E9ZV9DTYyw8oV7OvzSOW0ghR6FOAxz3DLqwFmr276F5wxzAaIaQVZzNozCW1u7pzV1OdE9BzdbJUCYUJrzzrQgziVSo8/SxWsicrBKluHKV20C1qKFGwoIeJpiCWGGdFr0MhWkSIUKS2kJwaycXhkXchtGACvosxKlVeJivbnukOryKGWgDF/HcGGVmCwyqoiihRm1l48poKoWzCiSTs3VV7ByWnHEVBOz4qesZIucDgwoc0UL/npF6lwjClRxTqE0XNih/sZOObGZ1LjlrIqu17MiSGldQyp8jRhq+bCGZCkBQnDjCSiw0fWqqx4samfJwXrk2IxYVQA/VpX3MC2sauoIXEmpgxpUotUf5XU4UTKYMdN6C0RYZ3w7oKpndrt4vXnHChDr86QsmiHAH2Vi7ECvhgCEup/qPlSTpJUn1194zeMlzL1SZ6s8KcLXkj9HyNZbFS0n9LpLyhDx9ReDBtBqR1zvhVG9A612KgA49HpJJJyCQa1+kAtOCZB3G4CUyq+4POj62D2PqukbWcUiYpPpgz8TlTlUApufVLitObu5ePPmcwgoFjR24x78glmLjwKRCGzxIBDkdJC3vVeJcWELrJOTdjJTzLBp2jbPAg7AjhSkkR5KlQtjT9BQptIQKixwcnSUXXKF8yD6ORNNvgcgZKUmi8mxYTDmA40YGqdhi0/qzuAq9B8gXPbjPpWxFSAThyYcBh441c4OLICHltfO5FiNzjaHmVVXbz7MTUX1n2a0Whv9mdm6QhJqSqrIZjcJin27Epnwjy67IjDjzDFzIQ1GJldYEzJa7lNcXGGzkqaTlRx7fW5OSxFpHj1mRm1ppevvt5K6DWOmewDMPmXoWaEnCmgKayGQE2VI5f7KTZ4GUInZlPOaDGqGGOhQ+gXCDsmU8lZ7tGHTIp1n+zeWs8qLdrsj4DPSJgsj9LZOJ+rCwJnDqveajiTYhLSFamDJDH+EBfM6T1woqvtQSof8QJmIvbyIH168F8z0wYgu1awxlzpAxb0PNR8jaBAzO6xLme1ML18JuNG3FO9ihE9X5efiYhjxWkDJtW51iV59PUnmGztdnKAMQ8wYfWHkMOx8g762YJ5HvNTYOJl1C33Use55ewj7TDhs880F7ooFBy4kiNbdVnnEI6kCLfN2gq/YmBchK6OxzqdqqrI0uWCz64AVyPGa9bex0gxJyp5euIzFPKbLKwQDnrHjtW8qrqocSZi4JYyXl0hZupjR7XwlnLkZQIvadKiIEUSx540bWAyM86rGf7qkyPgIW7V27m4PP3VIT904wm+Jfyp/ary4if6AIZTYL/SF1uoyXPio4elrPx8IquFp67AKXlObnFbt4yZ8J7IzpMlQ0LnMDnwWuujTuB7E4Yqz4JWJZhM01R8ewNqOckJVLec2Y4HYKFNnKtCbm91opOX01zlZgYtAP1w2kWLy236E6b5E8KH5FrTqellgmZjW557HnAZZiuIBmw9L+KzzfjAdJJaF3RSoDOObjFALEzKUSBHKZjUp3s/akKfhIYortmwy1pYphseYetu1PjDG0UfLr2n53l+Qg5Bv0eLfoDkRe7kMsxaXCvoeRmKm1dhW9dRGdX1IexUJTj3ooim395YQgGQM83oH8RUhDTNtuyhx+xC4B5s3GMIQDHpMFiKoJ1GNDfC9A5Xm7cuQid36OwFUqPN7paawA7IfRosoURkYXHlKizjEN+rjRbAuBQ01VwDckN/We/6QlpmnMnuMlpu3szv8F9JC8REPVP6EcA2rOweLztNaJlO0Z51kKzecFts+F7DZVpQSloDi94QGQlZht2R7309E0K/KHN9+rrVkVGg5FERf9eLmSP6NDRu2tywLc3WtKGJ+WOvMQzLlqss8cQNVd/By3RIW4Zt+IU2ykiaeOZty+3WN5EBcCSHwkdf+m0i2vI18s2wU1K7vJpgl5c47PK6i11eDLLLK1R2ednM2+7UB972eYHRLq962uelWLu8PmyfF63t8kq6fV7et89rDvd5IeQ+r848XjIKHnfJ6KvoktFdXcf6P2aGxtVbnCV/AAAAAElFTkSuQmCC\">"};
  window.__GW_LOGO = "<svg width=\"73\" height=\"48\" viewBox=\"0 0 73 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" > <path d=\"M48.9109 48.0001V24H24.9111C24.9111 37.1667 35.7443 48.0001 48.9109 48.0001Z\" fill=\"#901D00\" /> <path d=\"M24.9111 0V24.0001H48.9109C48.9109 10.8334 38.0777 0 24.9111 0Z\" fill=\"#1D4E13\" /> <path d=\"M0.910156 24.0001H24.9099V0C11.7434 0 0.910156 10.8334 0.910156 24.0001Z\" fill=\"#71955E\" /> <path d=\"M24.9099 48.0001V24H0.910156C0.910156 37.1667 11.7434 48.0001 24.9099 48.0001Z\" fill=\"#A2BB8A\" /> <path d=\"M48.9109 24H24.9111V48.0001C38.0777 48.0001 48.9109 37.1667 48.9109 24Z\" fill=\"#D1D7B5\" /> <path d=\"M48.9111 0V24.0001H72.9109C72.9109 10.8334 62.0777 0 48.9111 0Z\" fill=\"#E1AE89\" /> <path d=\"M24.9111 24.0001H48.9109V0C35.7443 0 24.9111 10.8334 24.9111 24.0001Z\" fill=\"#F1DEC5\" /> <path d=\"M72.9109 24H48.9111V48.0001C62.0777 48.0001 72.9109 37.1667 72.9109 24Z\" fill=\"#B86845\" /> </svg>";
  var ICON_ORDER = ["linkedin", "gmail", "google-calendar", "outlook", "google-contacts", "granola", "luma", "instagram", "x"];
  var NOUN = { customer: "Customers", investor: "Investors", hire: "Candidates", partner: "Partners", advisor: "Advisors", career: "Opportunities" };
  var RESULTS = {
    customer: [{ i: "SC", n: "Sarah Chen", r: "VP Partnerships · Acme", h: "Met at SaaStr · 2 mutual connections" }, { i: "MR", n: "Marcus Reyes", r: "Head of Growth · Northwind", h: "Intro'd by Dana · replied warmly in March" }, { i: "PN", n: "Priya Nair", r: "COO · Brightline", h: "Followed your launch · engaged 3 times" }],
    investor: [{ i: "SC", n: "Sarah Chen", r: "Partner · Northstar Ventures", h: "Met at a founder dinner · backs 3 founders you know" }, { i: "DO", n: "David Okoro", r: "Principal · Seedwave", h: "Replied to your last update · warm" }, { i: "LF", n: "Lena Fischer", r: "GP · Atlas Fund", h: "2 portfolio founders you know well" }],
    hire: [{ i: "SC", n: "Sarah Chen", r: "Staff Engineer · ex-Stripe", h: "Met at a hackathon · vouched for by 2 you trust" }, { i: "TR", n: "Tomás Rivera", r: "Senior Engineer · ex-Datadog", h: "Referred by a teammate · open to moving" }, { i: "AK", n: "Aisha Khan", r: "Eng Lead · ex-Figma", h: "You worked together in 2022" }],
    partner: [{ i: "SC", n: "Sarah Chen", r: "BD Lead · Northwind", h: "Already partners with 2 companies you know" }, { i: "BC", n: "Ben Carter", r: "Head of Partnerships · Loop", h: "Met at a conference · shared customer" }, { i: "NS", n: "Nina Sato", r: "Alliances · Vertex", h: "Warm intro via your advisor" }],
    advisor: [{ i: "SC", n: "Sarah Chen", r: "2x Founder · Advisor", h: "Been exactly where you are · trusted circle" }, { i: "RP", n: "Raj Patel", r: "Ex-VP GTM · scaled 0→$50M", h: "Intro'd by a mentor" }, { i: "MG", n: "Maria Gomez", r: "Operator → Advisor", h: "Followed your journey · offered to help" }],
    career: [{ i: "SC", n: "Sarah Chen", r: "Director · Acme (hiring)", h: "Your mentor knows her well" }, { i: "JW", n: "James Wu", r: "Hiring Manager · Northwind", h: "2nd degree · warm path" }, { i: "ER", n: "Elena Ross", r: "Recruiter · Talent Co", h: "Placed 2 people you know" }]
  };
  function tidy(s) { return s.replace(/\bai\b/g, "AI").replace(/\bsmb\b/g, "SMB").replace(/\bic\b/g, "IC").replace(/\bsaas\b/gi, "SaaS"); }

  var GOALS = {
    customer: { label: "My next deal", hook: "Your next deal is already in your network.",
      refineHead: "Who's the deal with?",
      refine: [{ label: "Who's on the other side?", opts: ["Founders", "Execs", "Business owners", "Investors"] }, { label: "Their stage or size", opts: ["Early-stage", "Growth", "Enterprise", "SMB", "Any stage"] }],
      q: function (p) { var sm = { "Early-stage": "early-stage", "Growth": "growth-stage", "Enterprise": "enterprise", "SMB": "SMB", "Any stage": "" }; var st = (p[1] in sm) ? sm[p[1]] : p[1].toLowerCase(); var who = p[0].toLowerCase().replace(/s$/, ""); return "who's a warm " + (st ? st + " " : "") + who + " in my network?"; },
      person: { role: "VP Partnerships · Acme", match: "Ideal customer fit", history: "Met at SaaStr · last spoke in March · 2 mutual connections", act: "Draft a warm intro" } },
    investor: { label: "My next investor", hook: "Your next investor is already in your network.",
      refineHead: "Tell us about your raise",
      refine: [{ label: "Stage", opts: ["Pre-seed", "Seed", "Series A", "Series B+"] }, { label: "Sector", opts: ["AI", "Fintech", "Health", "Consumer", "Climate", "SaaS"] }],
      q: function (p) { var st = p[0]; var lead = /Series/.test(st) ? st : st.toLowerCase() + "-stage"; return lead + " investors who back " + p[1].toLowerCase(); },
      person: { role: "Partner · Northstar Ventures", match: "Backs your stage & space", history: "Met at a founder dinner · 3 founders you know are in her portfolio", act: "Draft a warm intro" } },
    hire: { label: "My next hire", hook: "Your next hire is already in your network.",
      refineHead: "Who are you hiring?",
      refine: [{ label: "For which team", opts: ["Engineering", "Sales", "Design", "Product", "Marketing", "Ops"] }, { label: "At what level", opts: ["Junior", "Mid", "Senior", "Exec"] }],
      q: function (p) { return "who could be my next " + p[1].toLowerCase() + " " + p[0].toLowerCase() + " hire?"; },
      person: { role: "Staff Engineer · ex-Stripe", match: "Matches the role", history: "Met at a hackathon · vouched for by 2 people you trust", act: "Draft a warm intro" } },
    partner: { label: "My next partnership", hook: "Your next partnership is already in your network.",
      refineHead: "What kind of partner?",
      refine: [{ label: "What you want from it", opts: ["Get in front of their customers", "Plug into their product", "Market together", "Have them sell for me"] }, { label: "Who with", opts: ["Bigger platforms", "Peer startups", "Agencies", "Industry leaders"] }],
      q: function (p) { var v = { "Get in front of their customers": "get me in front of their customers", "Plug into their product": "integrate with me", "Market together": "market alongside me", "Have them sell for me": "sell my product for me" }; return p[1].toLowerCase() + " who could " + (v[p[0]] || p[0].toLowerCase()); },
      person: { role: "BD Lead · Northwind", match: "Strong partnership fit", history: "Met at a conference · already partners with 2 companies you know", act: "Draft a warm intro" } },
    advisor: { label: "My next advisor", hook: "The advisor you need is already in your network.",
      refineHead: "What do you need advice on?",
      refine: [{ label: "What you need help with", opts: ["Fundraising", "Go-to-market", "Product", "Hiring", "Scaling"] }, { label: "Who you'd trust on it", opts: ["Done it before", "Exited founders", "Operators at scale", "Domain experts"] }],
      q: function (p) { var c = { "Done it before": "who've done it before", "Exited founders": "who've exited", "Operators at scale": "who've operated at scale", "Domain experts": "who know the space" }; return "advisors " + (c[p[1]] || "like " + p[1].toLowerCase()) + " to help with " + p[0].toLowerCase(); },
      person: { role: "2x Founder · Advisor", match: "Been exactly where you are", history: "Met at a workshop · backed by people you trust", act: "Ask to connect" } },
    career: { label: "My next career move", hook: "Your next move starts with someone you know.",
      refineHead: "What's next for you?",
      refine: [{ label: "Your next move", opts: ["A bigger leadership role", "An exec seat", "A founder role", "A board seat", "A new industry"] }, { label: "Who could open the door", opts: ["Investors", "Founders", "Execs", "Recruiters"] }],
      q: function (p) { var m = p[0].charAt(0).toLowerCase() + p[0].slice(1); return p[1].toLowerCase() + " who could open a door to " + m; },
      person: { role: "Director · Acme (hiring now)", match: "Hiring for roles like yours", history: "2nd degree · your mentor knows her well", act: "Ask for a warm intro" } }
  };
  var ROLES = {
    founder: { label: "Founder", features: ["Find any hire or investor across people you already know", "See the warm path to anyone — skip the cold outreach", "Walk into every meeting already briefed"] },
    investor: { label: "Investor", features: ["Source deals from founders you already trust", "Share portfolio & founder lists in a tap", "Never lose a founder relationship to time"] },
    recruiter: { label: "Recruiter", features: ["Search candidates in plain language, not boolean", "Surface warm referrals over cold InMails", "Every past candidate, one query away"] },
    sales: { label: "Sales or BD", features: ["Find prospects hiding in your own network", "See who-knows-whom into any account", "Timely nudges that keep every deal warm"] },
    community: { label: "Community builder", features: ["Pull up any curated group in a second", "Make intros both directions, effortlessly", "Remember the details that make you memorable"] },
    operator: { label: "Operator", features: ["Every conversation captured automatically", "Full context before every meeting", "Follow-ups tracked so nothing slips"] }
  };
  // Real published-site testimonials (goodword.com), mapped to the closest role.
  var RANA = { text: "Goodword is the first tool I've seen that actually surfaces the right connection at the right moment. That's how deals get done.", name: "Rana", title: "Investor & Exited Founder" };
  var LAUREN = { text: "RUN, don't walk. Worth its weight in gold — it helps me find the needles in my huge networking haystack.", name: "Lauren", title: "Product Executive" };
  var KATIE = { text: "I dictate notes after meeting someone and Goodword reminds me why the relationship matters, without relying on my memory.", name: "Katie", title: "Angel Investor" };
  var QUOTES = { founder: RANA, investor: RANA, sales: RANA, recruiter: LAUREN, community: KATIE, operator: KATIE };
  var CLOSE = {
    founder: { h: "Founders win through <em>who they know.</em>", sub: "Goodword turns the network you've already built into your warmest pipeline." },
    investor: { h: "Your best deals come from people you <em>already trust.</em>", sub: "Goodword surfaces the founders and intros already sitting in your network." },
    recruiter: { h: "Your next great hire is a <em>warm intro away.</em>", sub: "Find candidates across the people you already know — skip the cold InMails." },
    sales: { h: "Your warmest pipeline is the one you <em>already know.</em>", sub: "Goodword shows you who-knows-whom into every account." },
    community: { h: "You're the connector. <em>Goodword makes it effortless.</em>", sub: "Every person, every detail, every intro — in one place." },
    operator: { h: "The network you've spent a career building, <em>finally searchable.</em>", sub: "Goodword captures every conversation and hands you the context." }
  };
  var GOAL_ORDER = ["customer", "investor", "hire", "partner", "advisor", "career"];
  var ROLE_ORDER = ["founder", "investor", "recruiter", "sales", "community", "operator"];
  var ROLE_PLURAL = { founder: "Founders", investor: "Investors", recruiter: "Recruiters", sales: "Sales & BD", community: "Community builders", operator: "Operators" };
  var ORDER = ["goal", "value", "refine", "search", "role", "sell"];
  var REEL = GOAL_ORDER.map(function (k) { return GOALS[k].label; });

  var CSS = "\
  :host{--paper:oklch(0.9868 0.0079 73.746);--paper-2:oklch(0.9144 0.027 69.278);--card:rgba(255,255,255,.74);\
  --ink:#2e2d27;--muted:oklch(0.4946 0.0053 54.919);\
  --green:#1d4e13;--green-mid:oklch(0.48 0.100 148);--green-soft:oklch(0.68 0.096 147);--green-tint:oklch(0.98 0.024 119);\
  --clay:#b86845;--clay-deep:oklch(0.4261 0.1542 33.762);--line:oklch(0.8600 0.032 74);\
  all:initial;display:block;}\
  *{box-sizing:border-box;}\
  .root{position:relative;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:var(--ink);\
  min-height:100vh;min-height:100dvh;overflow:hidden;-webkit-font-smoothing:antialiased;line-height:1.5;\
  background:radial-gradient(120% 80% at 50% -10%,#FFFDF8 0%,var(--paper) 44%,var(--paper-2) 100%);}\
  canvas.net{position:absolute;inset:0;width:100%;height:100%;display:block;z-index:0;}\
  .grain{position:absolute;inset:0;z-index:1;pointer-events:none;opacity:.5;mix-blend-mode:multiply;background-image:radial-gradient(rgba(29,78,19,.05) 1px,transparent 1px);background-size:3px 3px;}\
  .stage{position:relative;z-index:2;min-height:100vh;min-height:100dvh;display:flex;flex-direction:column;align-items:center;}\
  .bar{width:100%;max-width:620px;padding:20px 24px 0;opacity:0;transition:opacity .5s ease;}\
  .bar.on{opacity:1;}\
  .bar-row{display:flex;align-items:center;gap:14px;min-height:26px;}\
  .back{background:none;border:none;color:var(--muted);cursor:pointer;font-size:20px;line-height:1;padding:2px 6px 2px 0;font-family:inherit;border-radius:8px;transition:color .2s,transform .2s;}\
  .back:hover{color:var(--green);transform:translateX(-2px);}\
  .back:disabled{opacity:0;pointer-events:none;}\
  .dots{display:flex;gap:6px;flex:1;}\
  .dots i{height:6px;flex:1;max-width:60px;background:var(--line);border-radius:4px;overflow:hidden;position:relative;}\
  .dots i:before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,var(--green-mid),var(--green));transform:scaleX(0);transform-origin:left;transition:transform .5s cubic-bezier(.5,.1,.1,1);}\
  .dots i.done:before{transform:scaleX(1);}\
  .dots i.cur:before{transform:scaleX(1);animation:sheen 1.8s ease-in-out infinite;}\
  @keyframes sheen{0%,100%{opacity:.85;}50%{opacity:1;}}\
  .stepn{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap;}\
  .screen{width:100%;max-width:620px;flex:1;display:flex;flex-direction:column;padding:26px 24px 46px;}\
  h1{font-family:'Domaine Display','Domaine Text',Georgia,'Times New Roman',serif;font-weight:500;font-size:clamp(29px,7.2vw,44px);line-height:1.08;margin:0 0 16px;letter-spacing:-.015em;text-wrap:balance;}\
  h1 em{font-style:italic;color:var(--green);}\
  .body{font-size:17px;color:var(--muted);margin:0 0 24px;max-width:33em;}\
  .opts{display:flex;flex-direction:column;gap:11px;margin-top:2px;}\
  .opt{position:relative;overflow:hidden;text-align:left;font:inherit;font-size:17px;font-weight:500;color:var(--ink);background:var(--card);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid var(--line);border-radius:15px;padding:17px 50px 17px 19px;cursor:pointer;transition:transform .18s cubic-bezier(.2,.8,.2,1),border-color .18s,box-shadow .18s,background .18s;}\
  .opt:after{content:'→';position:absolute;right:19px;top:50%;transform:translateY(-50%) translateX(-4px);color:var(--green);opacity:0;transition:opacity .18s,transform .18s;font-size:18px;}\
  .opt:hover,.opt:focus-visible{transform:translateY(-2px);border-color:var(--green-soft);background:rgba(255,255,255,.94);outline:none;box-shadow:0 10px 26px -14px rgba(29,78,19,.45);}\
  .opt:hover:after,.opt:focus-visible:after{opacity:1;transform:translateY(-50%) translateX(0);}\
  .opt:active{transform:translateY(0) scale(.99);}\
  .opt.chosen{border-color:var(--green);background:linear-gradient(180deg,rgba(255,255,255,.96),var(--green-tint));box-shadow:0 12px 30px -14px rgba(29,78,19,.5);}\
  .cta{position:relative;overflow:hidden;font:inherit;font-size:17px;font-weight:600;color:#FFF7EF;border:none;border-radius:40px;padding:18px 26px;cursor:pointer;width:100%;margin-top:auto;text-align:center;text-decoration:none;display:block;background:linear-gradient(180deg,#C06a44,var(--clay-deep));box-shadow:0 14px 34px -14px rgba(120,43,15,.7);transition:transform .16s cubic-bezier(.2,.8,.2,1),box-shadow .16s;}\
  .cta:hover{transform:translateY(-2px);box-shadow:0 20px 40px -16px rgba(120,43,15,.8);}\
  .cta:active{transform:translateY(0) scale(.99);}\
  .cta:before{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;transform:skewX(-20deg);background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent);animation:shine 3.6s ease-in-out infinite;}\
  @keyframes shine{0%{left:-60%;}55%,100%{left:130%;}}\
  ul.feat{list-style:none;padding:0;margin:8px 0 20px;display:flex;flex-direction:column;gap:14px;}\
  ul.feat li{display:flex;gap:12px;font-size:16.5px;align-items:flex-start;}\
  ul.feat .tick{flex:none;width:22px;height:22px;border-radius:50%;background:rgba(29,78,19,.12);color:var(--green);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;margin-top:1px;}\
  .media{position:relative;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:linear-gradient(135deg,#FFFDF8,var(--green-tint));min-height:200px;display:flex;align-items:center;justify-content:center;margin:8px 0 24px;padding:18px;box-shadow:inset 0 1px 0 rgba(255,255,255,.7),0 18px 40px -30px rgba(29,78,19,.4);}\
  .media span{position:relative;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);text-align:center;max-width:24em;}\
  .draft{border:1px dashed var(--clay);border-radius:14px;background:rgba(184,104,69,.06);padding:13px 15px;margin:6px 0 22px;font-size:13.5px;color:var(--clay-deep);font-style:italic;}\
  .draft b{font-style:normal;font-weight:700;letter-spacing:.07em;text-transform:uppercase;font-size:10.5px;display:block;margin-bottom:4px;}\
  .fade{opacity:0;transform:translateY(12px);transition:opacity .6s ease,transform .6s cubic-bezier(.2,.8,.2,1);}\
  .fade.show{opacity:1;transform:none;}\
  .fade.gone{opacity:0;transform:translateY(-10px);}\
  .opener{flex:1;display:flex;flex-direction:column;justify-content:flex-start;padding-top:5vh;}\
  .imagine{font-family:'Domaine Display',Georgia,serif;font-style:italic;font-size:clamp(30px,9vw,52px);color:var(--muted);text-align:center;transform-origin:center;opacity:0;transform:scale(.94);transition:opacity .8s ease,transform 1.4s cubic-bezier(.2,.8,.2,1);}\
  .imagine.show{opacity:.85;transform:scale(1.05);}\
  .imagine.gone{opacity:0;transform:scale(1.14);transition:opacity .55s ease,transform .7s ease;position:absolute;left:0;right:0;text-align:center;}\
  .opener h1{font-size:clamp(29px,7.4vw,46px);}\
  .reelwrap{font-family:'Domaine Display',Georgia,serif;font-size:clamp(24px,6.6vw,38px);line-height:1.1;margin-top:6px;min-height:1.3em;}\
  .reel{font-style:italic;color:var(--green);display:inline-block;transition:opacity .12s ease,transform .12s ease;}\
  .reel.flip{opacity:.25;transform:translateY(-6px);}\
  .skiphint{position:absolute;bottom:20px;left:0;right:0;text-align:center;font-size:12px;letter-spacing:.08em;color:var(--muted);opacity:0;transition:opacity .5s;}\
  .skiphint.on{opacity:.6;}\
  .beats{display:flex;flex-direction:column;gap:20px;flex:1;}\
  .consolidate{text-align:center;padding:10px 0 4px;}\
  .itiles{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:30px;transition:transform .85s cubic-bezier(.5,.05,.2,1),opacity .7s ease;}\
  .itiles.flow{transform:translateY(46px) scale(.55);opacity:0;}\
  .itile{width:48px;height:48px;border-radius:14px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;box-shadow:0 6px 16px -12px rgba(29,78,19,.5);opacity:0;transform:translateY(10px) scale(.9);transition:opacity .55s ease,transform .55s cubic-bezier(.2,.8,.2,1);}\
  .itile.show{opacity:1;transform:none;}\
  .itile svg{width:26px !important;height:26px !important;display:block;}\
  .gwmark{width:180px;max-width:70%;margin:10px auto 26px;opacity:0;transform:scale(.6);transition:opacity .7s ease,transform .8s cubic-bezier(.2,.8,.2,1);}\
  .gwmark.show{opacity:1;transform:scale(1);}\
  .gwmark svg{width:100%;height:auto;display:block;}\
  .netviz{position:relative;width:100%;max-width:340px;height:172px;margin:2px auto 18px;}\
  .netlines{position:absolute;inset:0;width:100%;height:100%;opacity:0;transition:opacity .8s ease;pointer-events:none;z-index:1;}\
  .netviz.lit .netlines{opacity:.85;}\
  .netlines line{stroke:var(--green-soft);stroke-width:1.3;fill:none;vector-effect:non-scaling-stroke;stroke-dasharray:13 11;stroke-linecap:round;animation:flowline 2.6s linear infinite;}\
  @keyframes flowline{to{stroke-dashoffset:-24;}}\
  .netviz .itile{position:absolute;width:36px;height:36px;border-radius:10px;margin:0;z-index:2;transform:translate(-50%,-50%) scale(.85);}\
  .netviz .itile svg,.netviz .itile img{width:20px !important;height:20px !important;}\
  .netviz .itile.show{opacity:1;transform:translate(-50%,-50%) scale(1);}\
  .netviz .gwmark{position:absolute;left:50%;top:83%;width:168px;max-width:62%;margin:0;z-index:2;transform:translate(-50%,-50%) scale(.6);}\
  .netviz .gwmark.show{opacity:1;transform:translate(-50%,-50%) scale(1);}\
  .ccap{font-family:'Domaine Display','Domaine Text',Georgia,serif;font-size:clamp(22px,5.6vw,29px);line-height:1.15;color:var(--ink);margin:0 0 12px;opacity:0;transform:translateY(8px);transition:opacity .5s ease,transform .5s ease;}\
  .ccap.show{opacity:1;transform:none;}\
  .ccap em{color:var(--green);font-style:italic;}\
  .csub{font-size:16px;color:var(--muted);margin:0;opacity:0;transition:opacity .5s ease;}\
  .csub.show{opacity:1;}\
  .refh{margin-top:auto;margin-bottom:36px;}\
  .rgroup{margin-bottom:36px;}\
  .rgroup:last-of-type{margin-bottom:0;}\
  .rlabel{font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:var(--green);font-weight:700;margin-bottom:13px;}\
  .rchips{display:flex;flex-wrap:wrap;gap:9px;}\
  .rchip{font:inherit;font-size:15px;font-weight:500;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:999px;padding:11px 17px;cursor:pointer;transition:transform .15s,border-color .15s,background .15s,box-shadow .15s;}\
  .rchip:hover{transform:translateY(-1px);border-color:var(--green-soft);}\
  .rchip.on{border-color:var(--green);background:linear-gradient(180deg,#fff,var(--green-tint));color:var(--green);font-weight:600;box-shadow:0 8px 20px -12px rgba(29,78,19,.5);}\
  .rtype{font:inherit;font-size:15px;color:var(--ink);background:var(--card);border:1px dashed var(--line);border-radius:999px;padding:11px 17px;outline:none;min-width:150px;flex:1;}\
  .rtype:focus{border-style:solid;border-color:var(--green);background:linear-gradient(180deg,#fff,var(--green-tint));}\
  .rtype::placeholder{color:var(--muted);}\
  .qlead{font-size:14px;font-weight:600;color:var(--muted);}\
  .qpill{font-size:14px;font-weight:600;color:var(--green);background:var(--green-tint);border:1px solid var(--green-soft);border-radius:999px;padding:5px 12px;}\
  .bub.me .qlead{color:#FFF7EF;opacity:.85;}\
  .bub.me .qpill{background:rgba(255,255,255,.9);border-color:transparent;color:var(--clay-deep);}\
  .sbar,.aibar{flex-wrap:wrap;}\
  .srch{border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.6);padding:12px;margin:2px 0 20px;box-shadow:0 14px 34px -30px rgba(29,78,19,.5);}\
  .tabs{display:flex;gap:6px;background:var(--green-tint);border-radius:12px;padding:4px;margin-bottom:12px;}\
  .tab{flex:1;font:inherit;font-size:13px;font-weight:600;color:var(--muted);background:none;border:none;border-radius:9px;padding:9px 4px;cursor:pointer;transition:background .2s,color .2s;}\
  .tab.on{background:#fff;color:var(--green);box-shadow:0 2px 8px -4px rgba(29,78,19,.4);}\
  .panel{padding:4px 4px 6px;}\
  .sbar,.aibar{display:flex;align-items:center;gap:9px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:13px 15px;font-size:15px;color:var(--ink);}\
  .sbar .mag{color:var(--green);font-size:17px;}\
  .cursor{display:inline-block;width:1.5px;height:17px;background:var(--green);animation:blink 1s step-end infinite;vertical-align:middle;}\
  @keyframes blink{50%{opacity:0;}}\
  .bub{max-width:84%;padding:12px 15px;border-radius:16px;font-size:15px;margin:4px 0;line-height:1.35;}\
  .bub.me{background:var(--clay);color:#FFF7EF;margin-left:auto;border-bottom-right-radius:5px;}\
  .bub.gw{background:var(--green-tint);color:var(--ink);border-bottom-left-radius:5px;}\
  .bub .gwtag{color:var(--green);font-weight:700;font-size:12px;margin-right:6px;}\
  .aibar .gwchip{color:var(--green);font-weight:700;font-size:13px;background:var(--green-tint);border-radius:8px;padding:3px 8px;white-space:nowrap;}\
  .airow{display:flex;gap:8px;margin-top:9px;flex-wrap:wrap;}\
  .airow span{font-size:13px;font-weight:600;color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:999px;padding:7px 13px;}\
  .found{margin:2px 0 22px;}\
  .found-label{font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:var(--green);font-weight:700;margin-bottom:10px;}\
  .pcard{border:1px solid var(--line);border-radius:18px;background:#fff;padding:16px;box-shadow:0 18px 40px -28px rgba(29,78,19,.5);}\
  .pc-top{display:flex;align-items:center;gap:12px;}\
  .pc-av{flex:none;width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--green-soft),var(--green));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;}\
  .pc-id{flex:1;min-width:0;}\
  .pc-id b{font-size:17px;}\
  .pc-id small{display:block;color:var(--muted);font-size:13px;}\
  .pc-badge{flex:none;font-size:11.5px;font-weight:600;color:var(--green);background:var(--green-tint);border-radius:999px;padding:6px 11px;}\
  .pc-hist{font-size:13.5px;color:var(--muted);border-top:1px solid var(--line);margin-top:13px;padding-top:12px;}\
  .pc-act{display:inline-block;margin-top:13px;font-size:14px;font-weight:600;color:#FFF7EF;background:var(--clay);border-radius:999px;padding:10px 18px;text-decoration:none;}\
  .srch2{margin:6px 0 4px;}\
  .tabs2{opacity:0;transform:translateY(-6px);transition:opacity .5s ease,transform .5s ease;pointer-events:none;}\
  .tabs2.show{opacity:1;transform:none;pointer-events:auto;}\
  .tabs2 .tab{opacity:0;transition:opacity .4s ease;}\
  .tabs2.show .tab{opacity:1;}\
  .tabs2.show .tab:nth-child(2){transition-delay:.14s;}.tabs2.show .tab:nth-child(3){transition-delay:.28s;}\
  .qwrap{position:relative;display:flex;align-items:center;flex-wrap:wrap;gap:9px;margin:16px 0;padding:15px 16px;font-size:16px;line-height:1.35;color:var(--ink);border:1px solid transparent;border-radius:14px;background:transparent;min-height:56px;transition:background .45s ease,border-color .45s ease,box-shadow .45s ease;}\
  .qwrap.box{background:#fff;border-color:var(--line);box-shadow:0 16px 38px -28px rgba(29,78,19,.55);}\
  .qchrome{color:var(--green);font-weight:600;font-size:15px;flex:none;}\
  .qpills{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 12px 6px;transition:transform .95s cubic-bezier(.4,0,.2,1),opacity .7s ease;}\
  .qpills.intobar{transform:translateY(48px);opacity:0;}\
  .qpills .qpill{opacity:0;transform:translateY(-10px) scale(.92);transition:opacity .45s ease,transform .55s cubic-bezier(.2,.8,.2,1);}\
  .qpills.in .qpill{opacity:1;transform:none;}\
  .qpills.in .qpill:nth-child(2){transition-delay:.08s;}\
  .qpills .qpill.drop{opacity:0;transform:translateY(30px) scale(.8);}\
  .qtype{flex:0 1 auto;min-width:0;white-space:normal;overflow-wrap:break-word;}\
  .qtype::after{content:\"\";display:inline-block;width:2px;height:1.05em;background:var(--green);margin-left:2px;vertical-align:-0.14em;animation:blink 1s step-end infinite;}\
  .airow2{display:none;gap:8px;margin:-4px 0 12px;flex-wrap:wrap;}\
  .airow2 span{font-size:13px;font-weight:600;color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:999px;padding:7px 13px;}\
  .s-ai .airow2{display:flex;}\
  .s-text .qwrap.box{background:var(--clay);border-color:transparent;color:#FFF7EF;margin-left:auto;max-width:88%;border-bottom-right-radius:5px;box-shadow:0 16px 38px -28px rgba(120,43,15,.6);}\
  .s-text .qtype{color:#FFF7EF;}\
  .s-text .qchrome{display:none;}\
  .s-text .cursor{background:#FFF7EF;}\
  .s-ai .qchrome{color:var(--green);font-weight:700;}\
  .results{display:flex;flex-direction:column;gap:10px;margin-top:4px;}\
  .rescard{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:13px 15px;box-shadow:0 12px 28px -24px rgba(29,78,19,.55);opacity:0;transform:translateY(14px);transition:opacity .5s ease,transform .5s cubic-bezier(.2,.8,.2,1);}\
  .rescard.show{opacity:1;transform:none;}\
  .rav{flex:none;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--green-soft),var(--green));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;}\
  .rinfo{flex:1;min-width:0;}\
  .rinfo b{font-size:15.5px;color:var(--ink);}\
  .rinfo small{display:block;color:var(--muted);font-size:13px;margin-top:1px;}\
  .rhist{display:block;color:var(--green);font-size:12.5px;margin-top:5px;}\
  .rgo{flex:none;color:var(--green-soft);font-size:18px;}\
  .shead{font-family:'Domaine Display',Georgia,serif;font-size:clamp(22px,5.6vw,30px);color:var(--ink);text-align:center;margin:0 0 16px;min-height:1.25em;opacity:0;transition:opacity .35s ease;}\
  .surface{margin-top:12px;margin-bottom:24px;min-height:452px;}\
  .results.gone{display:none;}\
  .pcard{display:none;padding:11px 12px 10px;opacity:0;transform:translateY(14px);transition:opacity .55s ease,transform .55s cubic-bezier(.2,.8,.2,1);}\
  .pcard.open{display:block;opacity:1;transform:none;}\
  .pc-hd{display:flex;gap:11px;align-items:flex-start;padding:2px 2px 10px;}\
  .pc-av{flex:none;width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--green-soft),var(--green));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;}\
  .pc-idw{display:flex;flex-direction:column;min-width:0;}\
  .pc-nm{font-size:17px;color:var(--ink);line-height:1.15;}\
  .pc-role{font-size:13px;color:var(--clay);font-weight:600;margin-top:1px;}\
  .pc-meta{font-size:12px;color:var(--muted);margin-top:3px;}\
  .pc-chip{display:inline-flex;align-items:center;gap:5px;align-self:flex-start;margin-top:6px;font-size:11.5px;font-weight:600;color:var(--ink);background:var(--green-tint);border:1px solid var(--line);border-radius:999px;padding:3px 9px;}\
  .pc-ci{display:inline-flex;width:12px;height:12px;}.pc-ci svg,.pc-ci img{width:100%;height:100%;display:block;}\
  .pc-row{display:flex;gap:10px;align-items:center;padding:8px 11px;border-radius:11px;margin-top:6px;}\
  .pc-ri{flex:none;width:26px;height:26px;border-radius:7px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;}\
  .pc-ri svg,.pc-ri img{width:15px;height:15px;display:block;}\
  .pc-rt{min-width:0;}.pc-rt b{font-size:13.5px;color:var(--ink);display:block;line-height:1.2;}.pc-rt small{font-size:12px;color:var(--muted);display:block;margin-top:1px;}\
  .r-blue{background:#eef4fb;}.r-green{background:#eef6ee;}.r-pink{background:#fbeef1;}.r-dark{background:#f2f0ec;}\
  .rescard.picked{border-color:var(--green-soft);box-shadow:0 0 0 2px var(--green-soft);}\
  .qzone{margin:14px;}\
  .webframe{border:1px solid transparent;border-radius:18px;background:transparent;overflow:hidden;box-shadow:none;transition:border-color .55s ease,background .55s ease,box-shadow .55s ease,opacity .5s ease;}\
  .webframe.pre{opacity:0;}\
  .webframe.built{border-color:var(--line);background:#fff;box-shadow:0 20px 46px -30px rgba(29,78,19,.5);}\
  .webframe:not(.built) .results{display:none;}\
  .webtop{display:flex;align-items:center;justify-content:space-between;max-height:0;opacity:0;padding:0 14px;overflow:hidden;background:var(--green-tint);transition:max-height .5s ease,opacity .5s ease,padding .5s ease;}\
  .webframe.built .webtop{max-height:64px;opacity:1;padding:11px 14px;border-bottom:1px solid var(--line);}\
  .wdots{display:flex;gap:6px;}\
  .wdots i{width:9px;height:9px;border-radius:50%;background:rgba(29,78,19,.18);}\
  .wbrand{display:flex;align-items:center;gap:5px;font-size:13px;font-weight:700;color:var(--green);}\
  .gwdot{color:var(--green);font-weight:700;}\
  .gwlogo{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;flex:none;}\
  .gwlogo svg{width:100%;height:100%;display:block;}\
  .webframe .qwrap{margin:0;padding:13px 15px;border:1px solid var(--line);background:var(--green-tint);border-radius:12px;min-height:auto;box-shadow:none;}\
  .webframe .qwrap.box{background:#fff;}\
  .webframe .results{padding:2px 8px 10px;margin:0;gap:0;}\
  .webframe .rescard{border:none;border-top:1px solid var(--line);border-radius:0;box-shadow:none;background:transparent;padding:14px 8px;}\
  .webframe .rescard:first-child{border-top:none;}\
  .thread{display:flex;flex-direction:column;gap:9px;padding:6px 2px;}\
  .tmsg{max-width:82%;padding:11px 15px;border-radius:19px;font-size:15px;line-height:1.35;opacity:0;transform:translateY(10px) scale(.98);transition:opacity .4s ease,transform .4s cubic-bezier(.2,.8,.2,1);}\
  .tmsg.show{opacity:1;transform:none;}\
  .tmsg.me{align-self:flex-end;background:var(--clay);color:#FFF7EF;border-bottom-right-radius:6px;}\
  .tmsg.gw{align-self:flex-start;background:#ECE6DC;color:var(--ink);border-bottom-left-radius:6px;}\
  .tmsg .gwtag{display:flex;align-items:center;gap:5px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--green);margin-bottom:5px;}\
  .tmsg .gwtag .gwlogo{width:14px;height:14px;}\
  .tmsg.typing{display:flex;gap:5px;align-items:center;padding:14px 16px;}\
  .tmsg.typing span{width:7px;height:7px;border-radius:50%;background:var(--muted);animation:tdot 1.2s infinite;}\
  .tmsg.typing span:nth-child(2){animation-delay:.2s;}.tmsg.typing span:nth-child(3){animation-delay:.4s;}\
  @keyframes tdot{0%,60%,100%{opacity:.3;transform:translateY(0);}30%{opacity:1;transform:translateY(-3px);}}\
  .tmsg.tres{align-self:flex-start;background:#fff;border:1px solid var(--line);display:flex;align-items:center;gap:11px;max-width:90%;padding:11px 14px;border-bottom-left-radius:6px;box-shadow:0 10px 24px -22px rgba(29,78,19,.5);}\
  .rav.sm{width:34px;height:34px;font-size:12px;}\
  .aiwrap{display:flex;flex-direction:column;gap:12px;}\
  .ailogos{display:flex;gap:8px;flex-wrap:wrap;opacity:0;transform:translateY(-6px);transition:opacity .45s ease,transform .45s ease;}\
  .ailogos.show{opacity:1;transform:none;}\
  .aichip{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:999px;padding:7px 12px;}\
  .ailogo{display:inline-flex;align-items:center;line-height:0;}\
  .ailogo svg{display:block;}\
  .ailabel{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:700;opacity:0;transition:opacity .45s ease;}\
  .ailabel.show{opacity:1;}\
  .aichat{display:flex;flex-direction:column;gap:14px;margin-top:6px;}\
  .aiuser{align-self:flex-end;max-width:86%;background:#fff;border:1px solid var(--line);border-radius:16px;border-bottom-right-radius:5px;padding:12px 16px;font-size:15px;line-height:1.4;color:var(--ink);box-shadow:0 10px 24px -20px rgba(29,78,19,.5);opacity:0;transform:translateY(8px);transition:opacity .45s ease,transform .45s ease;}\
  .aiuser.show{opacity:1;transform:none;}\
  .airesp{display:flex;gap:10px;align-items:flex-start;opacity:0;transform:translateY(8px);transition:opacity .5s ease,transform .5s ease;}\
  .airesp.show{opacity:1;transform:none;}\
  .aiava{flex:none;width:30px;height:30px;border-radius:9px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;padding:5px;box-shadow:0 6px 14px -10px rgba(29,78,19,.5);}\
  .aiava svg{width:100%;height:100%;display:block;}\
  .aibody{flex:1;min-width:0;display:flex;flex-direction:column;gap:10px;padding-top:3px;}\
  .aistatus{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600;color:var(--green);}\
  .aistatus.done{display:none;}\
  .edots i{animation:tdot 1.2s infinite;display:inline-block;}.edots i:nth-child(2){animation-delay:.2s;}.edots i:nth-child(3){animation-delay:.4s;}\
  .bridge{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;flex:1;padding:24px 0;}\
  .bhelps{opacity:0;transform:translateY(10px);transition:opacity .6s ease,transform .6s ease;}\
  .bhelps.show{opacity:1;transform:none;}\
  .bhead{display:block;font-size:14px;letter-spacing:.09em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-bottom:8px;}\
  .brole{display:block;font-family:'Domaine Display',Georgia,serif;font-style:italic;font-size:clamp(30px,8.5vw,48px);line-height:1.05;color:var(--green);min-height:1.1em;}\
  .brole.swap{animation:roleswap .44s cubic-bezier(.2,.8,.2,1);}\
  @keyframes roleswap{0%{opacity:0;transform:translateY(12px);}100%{opacity:1;transform:none;}}\
  .bsteps{display:flex;flex-direction:column;gap:16px;margin-top:36px;align-items:center;}\
  .bstep{font-size:19px;color:var(--muted);opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .7s cubic-bezier(.2,.8,.2,1);}\
  .bstep b{color:var(--green);font-weight:700;}\
  .bstep.show{opacity:1;transform:none;}\
  .bverbs{display:flex;align-items:center;gap:11px;margin-top:30px;opacity:0;transition:opacity .5s ease;flex-wrap:wrap;justify-content:center;}\
  .bverbs.show{opacity:1;}\
  .bverb{font-size:17px;font-weight:700;color:var(--line);transition:color .55s ease;}\
  .bverb.lit{color:var(--green);}\
  .bsep{color:var(--green-soft);font-weight:700;}\
  .bask{margin-top:44px;opacity:0;transform:translateY(12px);transition:opacity .55s ease,transform .55s cubic-bezier(.2,.8,.2,1);}\
  .bask.show{opacity:1;transform:none;}\
  .bask h2{font-size:20px;margin:0 0 16px;color:var(--ink);font-weight:700;}\
  .rolechips{display:flex;flex-wrap:wrap;gap:9px;justify-content:center;}\
  .rolechip{font:inherit;font-size:15px;font-weight:600;color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:999px;padding:11px 18px;cursor:pointer;transition:transform .15s,border-color .15s,background .15s,box-shadow .15s;}\
  .rolechip:hover,.rolechip:focus-visible{transform:translateY(-2px);border-color:var(--green-soft);background:var(--green-tint);outline:none;box-shadow:0 10px 24px -16px rgba(29,78,19,.5);}\
  .rolechip.chosen{background:var(--green);color:#fff;border-color:var(--green);}\
  .prodshot{margin:6px 0 22px;}\
  .prodshot .webframe{box-shadow:0 20px 46px -30px rgba(29,78,19,.5);}\
  .pqt{flex:1 1 auto;min-width:0;color:var(--ink);white-space:normal;overflow-wrap:break-word;}\
  .quote{margin:2px 0 22px;padding:24px 22px 20px;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:0 24px 50px -34px rgba(29,78,19,.45);}\
  .stars{color:var(--clay);font-size:15px;letter-spacing:3px;margin-bottom:14px;}\
  .quote p{margin:0 0 18px;font-size:16px;color:var(--ink);line-height:1.5;}\
  .quote figcaption{display:flex;align-items:center;gap:12px;}\
  .qavatar{flex:none;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--green-soft),var(--green));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;}\
  .qwho{display:flex;flex-direction:column;line-height:1.25;}\
  .qname{font-weight:700;color:var(--ink);font-size:14px;}\
  .qrole{color:var(--muted);font-size:13px;}\
  .bnet{color:var(--line);transition:color .55s ease;}\
  .bnet.lit{color:var(--ink);}\
  .qtag{display:inline-block;margin-left:8px;font-size:10px;letter-spacing:.07em;text-transform:uppercase;color:var(--clay);background:rgba(184,104,69,.1);border-radius:6px;padding:2px 6px;font-weight:700;vertical-align:middle;}\
  .cstat{margin:20px 0 0;text-align:center;line-height:1.3;opacity:0;transform:translateY(8px);transition:opacity .5s ease,transform .6s cubic-bezier(.2,.8,.2,1);}\
  .cstat.show{opacity:1;transform:none;}\
  .cstat-num{font-family:'Domaine Display',Georgia,serif;font-style:italic;font-size:clamp(22px,5.4vw,27px);color:var(--green);font-variant-numeric:tabular-nums;margin-right:6px;}\
  .cstat-lbl{font-size:14px;color:var(--muted);font-weight:600;}\
  .reassure{text-align:center;font-size:12.5px;color:var(--muted);margin:12px 0 0;}\
  .moat{text-align:center;font-family:'Domaine Display',Georgia,serif;font-size:clamp(19px,4.8vw,23px);line-height:1.3;color:var(--ink);margin:6px 0 16px;}\
  .moat em{color:var(--green);font-style:italic;}\
  .reveal{opacity:0;transform:translateY(14px);}\
  .screen.in .reveal{animation:rise .55s cubic-bezier(.2,.8,.2,1) forwards;animation-delay:var(--d,0ms);}\
  .screen.out{opacity:0;transform:translateY(-6px);transition:opacity .32s ease,transform .32s ease;}\
  .screen.in{animation:screenin .5s ease both;}\
  @keyframes screenin{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}\
  @keyframes rise{to{opacity:1;transform:none;}}\
  @media (prefers-reduced-motion:reduce){.reveal,.fade,.ccap,.csub,.cstat,.tabs2,.qpills,.rescard,.webframe,.tmsg,.ailogos,.aiuser,.airesp,.ailabel,.bstep,.bhelps,.bask{opacity:1!important;transform:none!important;animation:none!important;transition:none!important;}.netviz .itile,.netviz .gwmark{opacity:1!important;transform:translate(-50%,-50%)!important;animation:none!important;transition:none!important;}.netlines line{animation:none!important;}.qpills{display:none!important;}.tmsg.typing{display:none!important;}.cta:before,.cursor,.edots i,.qtype::after,.screen.in{animation:none!important;}.screen.out{transition:none;}}\
  ";

  var shadow = mount.attachShadow ? mount.attachShadow({ mode: "open" }) : mount;
  var st = document.createElement("style"); st.textContent = CSS; shadow.appendChild(st);
  var root = document.createElement("div"); root.className = "root";
  root.innerHTML =
    '<canvas class="net" aria-hidden="true"></canvas><div class="grain" aria-hidden="true"></div>' +
    '<div class="stage"><div class="bar"><div class="bar-row"><button class="back" aria-label="Back">←</button>' +
    '<div class="dots" aria-hidden="true"></div><span class="stepn"></span></div></div>' +
    '<div class="screen" aria-live="polite"></div></div>';
  shadow.appendChild(root);

  var canvas = root.querySelector("canvas.net"), barEl = root.querySelector(".bar"),
    screenEl = root.querySelector(".screen"), backBtn = root.querySelector(".back"),
    dotsEl = root.querySelector(".dots"), stepEl = root.querySelector(".stepn");
  dotsEl.innerHTML = ORDER.map(function () { return "<i></i>"; }).join("");
  var dots = dotsEl.querySelectorAll("i");

  var state = { goal: null, role: null, refine: null, refineGoal: null, query: null, history: [] };
  var current = "goal", progress = 0, timers = [];
  function later(fn, ms) { var id = setTimeout(fn, ms); timers.push(id); return id; }
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function raf2(fn) { requestAnimationFrame(function () { requestAnimationFrame(fn); }); }
  function typewriter(el, text, cb, onProg) { var i = 0, n = text.length; (function tick() { el.textContent = text.slice(0, i); if (onProg) onProg(n ? i / n : 1); i++; if (i <= n) later(tick, 28); else if (cb) later(cb, 260); })(); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  // ---- Tracking: first-touch attribution + event layer (PostHog via GTM dataLayer; direct posthog if present) ----
  var ATTR = (function () {
    var out = {};
    try {
      var p = new URLSearchParams(location.search);
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "li_fat_id"].forEach(function (k) { if (p.get(k)) out[k] = p.get(k); });
      out.landing_path = location.pathname;
      out.referrer = document.referrer || "";
      var saved = JSON.parse(localStorage.getItem("gw_funnel_attr") || "null");
      if (saved) { for (var k in saved) { if (!(k in out)) out[k] = saved[k]; } } // first-touch wins
      localStorage.setItem("gw_funnel_attr", JSON.stringify(out));
    } catch (e) {}
    return out;
  })();
  function phId() { try { return (window.posthog && window.posthog.get_distinct_id) ? window.posthog.get_distinct_id() : ""; } catch (e) { return ""; } }
  try { if (window.posthog && window.posthog.register) window.posthog.register(ATTR); } catch (e) {}
  function track(ev, props) {
    var payload = { schema: "gw_funnel_v1" };
    for (var k in ATTR) payload[k] = ATTR[k];
    if (props) { for (var k2 in props) payload[k2] = props[k2]; }
    try { if (window.posthog && window.posthog.capture) window.posthog.capture(ev, payload); } catch (e) {}
    try { window.dataLayer = window.dataLayer || []; var dl = { event: ev }; for (var k3 in payload) dl[k3] = payload[k3]; window.dataLayer.push(dl); } catch (e) {}
    try { if (typeof window.gwFunnelStep === "function") window.gwFunnelStep(ev, payload); } catch (e) {}
  }
  function picksNow() { var o = g(); return (state.refine && state.refineGoal === state.goal) ? state.refine : o.refine.map(function (gr) { return gr.opts[0]; }); }
  function g() { return GOALS[state.goal || "customer"]; }
  function r() { return ROLES[state.role || "founder"]; }
  function builtQuery() { var o = g(); return tidy(state.query || o.q(o.refine.map(function (gr) { return gr.opts[0]; }))); }
  function signupHref() {
    var p; try { p = new URLSearchParams(location.search); } catch (e) { p = new URLSearchParams(); }
    p.set("goal", state.goal || "customer"); if (state.role) p.set("role", state.role);
    var pk = picksNow(); if (pk[0]) p.set("refine1", pk[0]); if (pk[1]) p.set("refine2", pk[1]);
    p.set("q", builtQuery());
    var did = phId(); if (did) p.set("ph_distinct_id", did);
    if (!p.get("utm_source")) p.set("utm_source", "funnel"); p.set("lp", "start");
    return "https://app.goodword.com/auth/signup?" + p.toString();
  }
  function paintChrome() {
    var idx = ORDER.indexOf(current); progress = idx / (ORDER.length - 1);
    for (var i = 0; i < dots.length; i++) dots[i].className = i < idx ? "done" : (i === idx ? "cur" : "");
    stepEl.textContent = "Step " + (idx + 1) + " of " + ORDER.length;
    backBtn.disabled = state.history.length === 0;
    track("funnel_step_viewed", { step: current, step_index: idx + 1, step_count: ORDER.length, goal: state.goal || "", role: state.role || "" });
  }

  // ---- GOAL opener: Imagine → headline → reel → options (top-aligned) ----
  function goalOptionsHTML() {
    return GOAL_ORDER.map(function (k) { return '<button class="opt fade" data-goal="' + k + '">' + esc(GOALS[k].label) + "</button>"; }).join("");
  }
  function renderGoal() {
    barEl.classList.remove("on");
    screenEl.innerHTML =
      '<div class="opener">' +
      '<div class="imagine">Imagine…</div>' +
      '<h1 class="q fade">What the right connection could <em>unlock</em> for you right now...</h1>' +
      '<div class="reelwrap q2 fade"><span class="reel">' + esc(REEL[0]) + '</span></div>' +
      '<div class="opts" style="margin-top:10px"></div></div>' +
      '<div class="skiphint">tap to skip</div>';
    var imagine = screenEl.querySelector(".imagine"), q = screenEl.querySelector(".q"),
      reelWrap = screenEl.querySelector(".reelwrap"), reel = screenEl.querySelector(".reel"),
      opts = screenEl.querySelector(".opts"), hint = screenEl.querySelector(".skiphint");
    var done = false;
    function revealOptions() {
      if (done) return; done = true; barEl.classList.add("on");
      q.innerHTML = 'What could the right connection <em>unlock</em> for you right now?';
      reelWrap.style.display = "none";
      later(function () {
        opts.innerHTML = goalOptionsHTML();
        var os = opts.querySelectorAll(".opt");
        for (var i = 0; i < os.length; i++) (function (el, i) { later(function () { el.classList.add("show"); }, i * 60); })(os[i], i);
        hint.classList.remove("on");
      }, 200);
    }
    function skip() { if (done) return; clearTimers(); imagine.style.display = "none"; q.classList.add("show"); reelWrap.classList.remove("show"); revealOptions(); }
    function skipOnce() { if (!done) skip(); root.removeEventListener("click", skipOnce, true); }
    root.addEventListener("click", skipOnce, true);
    if (REDUCE) { imagine.style.display = "none"; q.classList.add("show"); revealOptions(); return; }
    raf2(function () { imagine.classList.add("show"); });
    later(function () { hint.classList.add("on"); }, 900);
    later(function () { imagine.classList.add("gone"); }, 1500);
    later(function () { imagine.style.display = "none"; q.classList.add("show"); }, 2150);
    later(function () { reelWrap.classList.add("show"); spinReel(reel, revealOptions); }, 4200);
  }
  function spinReel(el, doneCb) {
    var i = 0, ticks = 0, total = 15;
    function step() {
      var delay = 55 + Math.round(Math.pow(ticks / total, 2.4) * 320);
      el.classList.add("flip");
      later(function () { i = (i + 1) % REEL.length; el.textContent = REEL[i]; el.classList.remove("flip"); ticks++; if (ticks <= total) later(step, delay); else later(doneCb, 520); }, 70);
    }
    step();
  }

  // ---- VALUE: hook → integrations (always visible) with lines flowing into the Goodword wordmark → captions ----
  function renderValue() {
    barEl.classList.add("on");
    var o = g();
    var N = ICON_ORDER.length;
    var pts = [];
    for (var pi = 0; pi < N; pi++) { var x = 6 + (N > 1 ? pi / (N - 1) : 0.5) * 88; pts.push({ x: x, y: 22 }); }
    var anchor = { x: 50, y: 58 };
    var tiles = ICON_ORDER.map(function (k, i) { return '<span class="itile" style="left:' + pts[i].x.toFixed(1) + "%;top:" + pts[i].y.toFixed(1) + '%">' + (window.__GW_ICONS && window.__GW_ICONS[k] ? window.__GW_ICONS[k] : "") + "</span>"; }).join("");
    var lines = pts.map(function (p) { return '<line x1="' + p.x.toFixed(1) + '" y1="' + p.y.toFixed(1) + '" x2="' + anchor.x + '" y2="' + anchor.y + '"/>'; }).join("");
    screenEl.innerHTML =
      '<div class="beats">' +
      '<div class="beat b1"><h1 class="fade">' + esc(o.hook) + "</h1></div>" +
      '<div class="beat b2 fade"><div class="consolidate">' +
      '<div class="netviz"><svg class="netlines" viewBox="0 0 100 100" preserveAspectRatio="none">' + lines + "</svg>" + tiles + '<div class="gwmark">' + GWWORD + "</div></div>" +
      '<p class="ccap">Everyone, in <em>one place</em>.</p>' +
      '<p class="csub">Who you need, ready when you need them.</p>' +
      '<p class="cstat"><span class="cstat-num">5.2M+</span><span class="cstat-lbl">people already mapped in Goodword</span></p></div></div>' +
      "</div>" +
      '<button class="cta fade" data-next style="margin-top:26px">Show me how</button>';
    var b1 = screenEl.querySelector(".b1 h1"), b2 = screenEl.querySelector(".b2"), cta = screenEl.querySelector(".cta"),
      netviz = screenEl.querySelector(".netviz"), gwmark = screenEl.querySelector(".gwmark"),
      ccap = screenEl.querySelector(".ccap"), csub = screenEl.querySelector(".csub"), cstat = screenEl.querySelector(".cstat"), cstatNum = screenEl.querySelector(".cstat-num"), tileEls = screenEl.querySelectorAll(".itile");
    var doneV = false;
    function finishAll() {
      if (doneV) return; doneV = true; clearTimers();
      b1.classList.add("show"); b2.classList.add("show"); cta.classList.add("show"); netviz.classList.add("lit");
      for (var i = 0; i < tileEls.length; i++) tileEls[i].classList.add("show");
      gwmark.classList.add("show"); ccap.classList.add("show"); csub.classList.add("show"); cstat.classList.add("show"); if (cstatNum) cstatNum.textContent = "5.2M+";
    }
    function vskip(e) { if (e.target.closest && e.target.closest(".cta,.back")) return; if (!doneV) finishAll(); root.removeEventListener("click", vskip, true); }
    root.addEventListener("click", vskip, true);
    if (REDUCE) { finishAll(); return; }
    raf2(function () { b1.classList.add("show"); });
    var tIn = 1200;
    later(function () { b2.classList.add("show"); for (var i = 0; i < tileEls.length; i++) (function (el, k) { later(function () { el.classList.add("show"); }, k * 110); })(tileEls[i], i); }, tIn);
    var tLit = tIn + N * 110 + 450;
    later(function () { netviz.classList.add("lit"); gwmark.classList.add("show"); }, tLit);
    later(function () { ccap.classList.add("show"); }, tLit + 1100);
    later(function () { csub.classList.add("show"); }, tLit + 1450);
    later(function () { cstat.classList.add("show"); if (cstatNum) countUp(cstatNum, 5.2, 1200); }, tLit + 1750);
    later(function () { cta.classList.add("show"); }, tLit + 2200);
  }

  // ---- REFINE ----
  function renderRefine() {
    barEl.classList.add("on");
    var o = g();
    if (!state.refine || state.refineGoal !== state.goal) { state.refine = o.refine.map(function (gr) { return gr.opts[0]; }); state.refineGoal = state.goal; }
    var groups = o.refine.map(function (gr, gi) {
      var custom = state.refine[gi] && gr.opts.indexOf(state.refine[gi]) < 0;
      var ph = /^who/i.test(gr.label) ? "Someone else…" : "Something else…";
      var chips = gr.opts.map(function (opt) { return '<button class="rchip' + (state.refine[gi] === opt ? " on" : "") + '" data-refine="' + gi + '" data-val="' + esc(opt) + '">' + esc(opt) + "</button>"; }).join("");
      chips += '<input class="rtype" data-refine-input="' + gi + '" placeholder="' + ph + '" value="' + (custom ? esc(state.refine[gi]) : "") + '">';
      return '<div class="rgroup reveal" style="--d:' + (100 + gi * 120) + 'ms"><div class="rlabel">' + esc(gr.label) + '</div><div class="rchips">' + chips + "</div></div>";
    }).join("");
    screenEl.innerHTML =
      '<h1 class="reveal refh" style="--d:0ms">' + esc(o.refineHead) + "</h1>" +
      groups +
      '<button class="cta reveal" style="--d:' + (100 + o.refine.length * 120 + 120) + 'ms" data-next>Find them</button>';
    screenEl.classList.remove("in"); void screenEl.offsetWidth; screenEl.classList.add("in");
  }

  // ---- SEARCH ----
  var AI_OAI = '<svg viewBox="0 0 24 24" width="15" height="15" fill="#0D0D0D"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>';
  var AILOGOS = {
    claude: '<svg viewBox="0 0 24 24" width="15" height="15" fill="#D97757"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/></svg>',
    chatgpt: AI_OAI,
    codex: AI_OAI,
    gemini: '<svg viewBox="0 0 24 24" width="15" height="15"><defs><linearGradient id="gemg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4285F4"/><stop offset=".5" stop-color="#9B72CB"/><stop offset="1" stop-color="#D96570"/></linearGradient></defs><path fill="url(#gemg)" d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>'
  };
  var GWLOGO = window.__GW_LOGO || "";
  var GWWORD = '<svg width="139" height="21" viewBox="0 0 139 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_4052_4403)"> <path d="M19.0147 20.021L19.0295 10.5387L9.54735 10.5239C9.53923 15.726 13.8127 20.0129 19.0147 20.021Z" fill="#901D00"/> <path d="M9.56224 1.0415L9.54743 10.5238L19.0296 10.5386C19.0377 5.33651 14.7643 1.04963 9.56224 1.0415Z" fill="#1D4E13"/> <path d="M0.0652557 10.5092L9.54739 10.524L9.5622 1.04167C4.3602 1.03354 0.0733809 5.30705 0.0652557 10.5092Z" fill="#71955E"/> <path d="M9.53249 20.0064L9.5473 10.5241L0.0651736 10.5093C0.0570485 15.7114 4.3305 19.9982 9.53249 20.0064Z" fill="#A2BB8A"/> <path d="M19.0295 10.5387L9.54735 10.5239L9.53254 20.0062C14.7345 20.0143 19.0214 15.7408 19.0295 10.5387Z" fill="#D1D7B5"/> <path d="M19.0444 1.05664L19.0296 10.5389L28.5118 10.5538C28.5199 5.35165 24.2464 1.06477 19.0444 1.05664Z" fill="#E1AE89"/> <path d="M9.54743 10.5238L19.0296 10.5386L19.0444 1.05631C13.8424 1.04819 9.55556 5.3217 9.54743 10.5238Z" fill="#F1DEC5"/> <path d="M28.5119 10.5539L19.0298 10.5391L19.015 20.0213C24.217 20.0295 28.5038 15.7559 28.5119 10.5539Z" fill="#B86845"/> <path d="M36.7029 10.8031C36.6952 15.7546 38.3228 19.1813 41.2464 19.1859C43.1956 19.1889 44.62 17.7954 44.6239 15.3192L44.6254 14.3449C44.6281 12.6328 44.3659 11.7895 43.1817 11.1819L43.1818 11.1291L47.5803 11.136L47.5666 19.9095L46.7054 19.9082L45.4111 17.1381C44.7764 18.7436 43.0623 20.058 40.7972 20.0544C36.425 20.0476 33.244 16.1971 33.2524 10.7977C33.2614 5.00337 37.0076 1.08445 41.3798 1.09128C43.1707 1.09408 44.3021 1.91231 45.1186 1.91358C45.8299 1.91469 46.2256 1.52028 46.5685 1.09939L46.6476 1.09951L46.638 7.26292L46.193 7.26223C45.2234 4.1792 43.9338 1.70142 41.5896 1.69776C38.4289 1.69282 36.7111 5.32502 36.7026 10.8035L36.7029 10.8031Z" fill="black"/> <path d="M83.6163 3.02783C83.6189 1.34214 83.2768 0.735856 82.1721 0.181161L82.1722 0.128383L86.5444 0.135212L86.5181 16.9921C86.5155 18.6251 86.725 19.2575 87.8039 19.8126L87.8039 19.8653L83.59 19.8587L83.5949 16.6981C83.1174 18.7253 81.666 20.1192 79.6118 20.116C76.9257 20.1118 74.6642 17.6589 74.6708 13.4711C74.6773 9.28322 76.9994 6.70555 79.7383 6.70983C81.7668 6.713 83.1342 8.0058 83.6054 9.98167L83.6163 3.02783ZM83.598 14.6957L83.602 12.1408C83.6064 9.37515 82.1331 7.8191 80.7109 7.81687C78.8935 7.81404 77.863 10.0247 77.8576 13.4753C77.8522 16.9258 78.8762 18.8762 80.6936 18.879C82.0901 18.8812 83.5938 17.3822 83.598 14.6957Z" fill="black"/> <path d="M104.514 13.4385C104.52 9.54059 107.026 6.75244 110.398 6.75771C113.769 6.76298 116.241 9.55889 116.235 13.4568C116.228 17.3548 113.722 20.1693 110.377 20.1641C107.032 20.1588 104.508 17.3629 104.514 13.4385ZM113.051 13.4518C113.056 9.84336 112.217 7.26115 110.4 7.25831C108.582 7.25547 107.709 9.83543 107.703 13.4435C107.698 17.0516 108.537 19.6606 110.38 19.6635C112.223 19.6664 113.045 17.06 113.051 13.4518Z" fill="black"/> <path d="M124.229 9.83436C124.23 9.12304 123.808 8.64856 122.986 8.64728C121.717 8.6453 120.593 10.5135 120.589 13.1212L120.582 17.204C120.58 18.9424 121.102 19.3383 122.271 19.8667L122.271 19.9194L116.618 19.9106L116.618 19.8578C117.64 19.3065 117.815 18.8853 117.818 17.1469L117.829 9.92992C117.832 8.24423 117.558 7.63804 116.513 7.08342L116.514 7.03065L120.598 7.03703L120.592 10.8826C121.094 8.72349 122.167 6.80278 123.985 6.80562C125.306 6.80768 126.226 7.70477 126.224 9.02136C126.221 10.47 125.324 11.285 124.327 11.2835C123.929 11.2829 123.605 11.1508 123.506 10.9923C123.904 10.835 124.229 10.4141 124.23 9.83471L124.229 9.83436Z" fill="black"/> <path d="M134.981 3.10812C134.983 1.42243 134.661 0.81618 133.616 0.261579L133.616 0.208801L137.75 0.215258L137.724 17.0722C137.721 18.7051 137.919 19.3376 138.939 19.8925L138.939 19.9453L134.954 19.939L134.959 16.7783C134.508 18.8056 133.136 20.1997 131.194 20.1966C128.653 20.1927 126.516 17.74 126.522 13.5521C126.529 9.36427 128.724 6.78641 131.315 6.79046C133.232 6.79345 134.524 8.08613 134.97 10.062L134.981 3.10812ZM134.963 14.776L134.967 12.2211C134.971 9.45544 133.579 7.89952 132.234 7.89742C130.516 7.89473 129.541 10.1055 129.536 13.5561C129.531 17.0066 130.498 18.9569 132.217 18.9596C133.537 18.9616 134.958 17.4625 134.963 14.776Z" fill="black"/> <path d="M49.1634 13.3521C49.1695 9.45416 51.676 6.66602 55.0474 6.67128C58.4188 6.67655 60.8902 9.47247 60.8841 13.3704C60.878 17.2684 58.3715 20.0829 55.0265 20.0776C51.6814 20.0724 49.1572 17.2764 49.1634 13.3521ZM57.697 13.3654C57.7027 9.75693 56.8639 7.17472 55.0466 7.17188C53.2293 7.16904 52.3561 9.749 52.3504 13.3571C52.3448 16.9652 53.1836 19.5742 55.0273 19.5771C56.8709 19.58 57.6914 16.9735 57.697 13.3654Z" fill="black"/> <path d="M61.9158 13.3721C61.9219 9.47418 64.4284 6.68604 67.7999 6.6913C71.1709 6.69657 73.6429 9.49249 73.6368 13.3904C73.6307 17.2884 71.1236 20.1029 67.7789 20.0976C64.4339 20.0924 61.9097 17.2965 61.9158 13.3721ZM70.4493 13.3854C70.455 9.77695 69.6166 7.19474 67.7991 7.1919C65.9818 7.18906 65.1085 9.76902 65.1029 13.3771C65.0973 16.9852 65.936 19.5942 67.7797 19.5971C69.6237 19.6 70.4437 16.9935 70.4493 13.3854Z" fill="black"/> <path d="M96.641 11.6346L93.3882 20.1368L93.3354 20.1367L89.3744 9.83195C88.6924 8.06603 88.4027 7.69696 87.5878 7.03715L87.5879 6.98438L92.6712 6.99231L92.6711 7.04509C92.0908 7.33404 91.9326 7.70247 91.9317 8.25546C91.9311 8.67685 92.0886 9.20369 92.2981 9.78374L94.423 15.6078L96.3002 10.6328L96.0119 9.84232C95.33 8.05042 95.0673 7.73376 94.2517 7.04756L94.2518 6.99478L99.3094 7.00268L99.3093 7.05546C98.6762 7.37072 98.4916 7.73911 98.4907 8.31848C98.4901 8.71348 98.6476 9.24074 98.8307 9.82033L100.692 15.4861L102.623 10.0106C102.782 9.56303 102.888 9.11542 102.889 8.74674C102.89 7.98306 102.522 7.35033 101.707 7.0592L101.707 7.00643L105.35 7.01212L105.35 7.0649C104.405 7.89584 103.789 8.98808 103.313 10.2828L99.7104 20.1462L99.6576 20.1462L96.6417 11.6342L96.641 11.6346Z" fill="black"/> <path d="M104.514 13.4375C104.52 9.53956 107.026 6.75147 110.398 6.75673C113.769 6.762 116.241 9.55787 116.235 13.4559C116.228 17.3538 113.722 20.1683 110.377 20.1631C107.032 20.1579 104.508 17.3619 104.514 13.4375ZM113.051 13.4509C113.056 9.84241 112.217 7.26019 110.4 7.25735C108.582 7.25451 107.709 9.83447 107.703 13.4425C107.698 17.0506 108.537 19.6597 110.38 19.6625C112.223 19.6654 113.045 17.059 113.051 13.4509Z" fill="black"/> </g> <defs> <clipPath id="clip0_4052_4403"> <rect width="138.958" height="20" fill="white" transform="translate(0.0312381) rotate(0.0894905)"/> </clipPath> </defs> </svg>';
  function countUp(el, target, dur) {
    el.textContent = "0.0M";
    var start = null;
    function tick(ts) { if (start === null) start = ts; var p = Math.min(1, (ts - start) / dur); var e = 1 - Math.pow(1 - p, 3); el.textContent = (target * e).toFixed(1) + "M"; if (p < 1) requestAnimationFrame(tick); else el.textContent = target.toFixed(1) + "M+"; }
    requestAnimationFrame(tick);
  }
  var surfaceRender = null;
  function renderSearch() {
    barEl.classList.add("on");
    var o = g();
    var picks = (state.refine && state.refineGoal === state.goal) ? state.refine : o.refine.map(function (gr) { return gr.opts[0]; });
    var question = tidy(o.q(picks));
    track("funnel_search_viewed", { goal: state.goal || "", refine1: picks[0] || "", refine2: picks[1] || "", query: question });
    var pills = picks.map(function (p) { return '<span class="qpill">' + esc(tidy(p)) + "</span>"; }).join("");
    var res = RESULTS[state.goal || "customer"] || [];
    function rows() { return res.map(function (r, i) { return '<div class="rescard" data-ri="' + i + '"><span class="rav">' + esc(r.i) + '</span><div class="rinfo"><b>' + esc(r.n) + '</b><small>' + esc(r.r) + '</small><span class="rhist">' + esc(r.h) + '</span></div><span class="rgo">→</span></div>'; }).join(""); }
    function bubbles() { return res.map(function (r, i) { return '<div class="tmsg tres" data-ri="' + i + '"><span class="rav sm">' + esc(r.i) + '</span><div class="rinfo"><b>' + esc(r.n) + '</b><small>' + esc(r.r) + '</small><span class="rhist">' + esc(r.h) + '</span></div></div>'; }).join(""); }
    function aichip(name, key) { return '<span class="aichip"><span class="ailogo">' + (AILOGOS[key] || "") + "</span>" + esc(name) + "</span>"; }
    function profileCard() {
      var I = window.__GW_ICONS || {};
      function row(cls, icon, title, sub) { return '<div class="pc-row ' + cls + '"><span class="pc-ri">' + (I[icon] || "") + '</span><div class="pc-rt"><b>' + title + "</b><small>" + sub + "</small></div></div>"; }
      return '<div class="pcard"><div class="pc-hd"><span class="pc-av">SC</span><div class="pc-idw">' +
        '<b class="pc-nm">Sarah Chen</b><span class="pc-role">VP of Sales · Riverline</span>' +
        '<span class="pc-meta">Brooklyn, NY · 500+ connections</span>' +
        '<span class="pc-chip"><span class="pc-ci">' + (I.gmail || "") + "</span>Emailed 2 weeks ago</span></div></div>" +
        row("r-blue", "outlook", "Met at Primary Summit", "Javits Center · Apr 21") +
        row("r-green", "granola", "Owes you an intro", "Liz Tran · Head of BD · Asana") +
        row("r-pink", "luma", "Founders Coffee dinner", "+11 mutuals") +
        row("r-dark", "x", "Posted about hiring AEs", "“Hiring 3 AEs in NYC…” · ♥ 214") +
        "</div>";
    }

    screenEl.innerHTML =
      '<div class="srch2"><h1 class="shead"></h1><div class="tabs tabs2"><button class="tab on" data-tab="app">In the web app</button><button class="tab" data-tab="text">Over text</button><button class="tab" data-tab="ai">In your AI</button></div>' +
      '<div class="surface"></div></div>' +
      '<button class="cta" data-next>Keep going →</button>';
    var srch = screenEl.querySelector(".srch2"), surface = screenEl.querySelector(".surface"), cta = screenEl.querySelector(".cta"), shead = screenEl.querySelector(".shead");
    function setHead(t) { if (!shead) return; if (!shead.textContent) { shead.textContent = t; shead.style.opacity = "1"; return; } if (shead.textContent === t) return; shead.style.opacity = "0"; later(function () { shead.textContent = t; shead.style.opacity = "1"; }, 200); }
    function showCta() { cta.classList.add("show"); }
    function showTabs() { var t = screenEl.querySelector(".tabs2"); if (t) t.classList.add("show"); }
    function stagger(sel, base) { var els = surface.querySelectorAll(sel); for (var i = 0; i < els.length; i++)(function (el, k) { later(function () { el.classList.add("show"); }, base + k * 190); })(els[i], i); later(showCta, base + els.length * 190 + 120); }

    function renderApp(animate) {
      surface.innerHTML =
        '<div class="webframe"><div class="webtop"><span class="wdots"><i></i><i></i><i></i></span><span class="wbrand"><span class="gwlogo">' + GWLOGO + "</span>Goodword</span></div>" +
        '<div class="qzone"><div class="qpills">' + pills + "</div>" +
        '<div class="qwrap"><span class="qchrome">⌕</span><span class="qtype"></span></div></div>' +
        '<div class="results">' + rows() + "</div>" + profileCard() + "</div>";
      var qpz = surface.querySelector(".qpills"), qtype = surface.querySelector(".qtype"), qwrap = surface.querySelector(".qwrap"), frame = surface.querySelector(".webframe"), results = surface.querySelector(".results"), pcard = surface.querySelector(".pcard");
      qwrap.classList.add("box");
      function openProfile() { setHead("See the full story on anyone"); var first = surface.querySelector(".rescard"); if (first) first.classList.add("picked"); later(function () { results.classList.add("gone"); pcard.classList.add("open"); showCta(); }, 950); }
      function buildResults() { frame.classList.add("built"); var cards = surface.querySelectorAll(".rescard"); for (var i = 0; i < cards.length; i++)(function (el, k) { later(function () { el.classList.add("show"); }, k * 220); })(cards[i], i); later(openProfile, cards.length * 220 + 1600); }
      if (!animate) { setHead("See the full story on anyone"); showTabs(); frame.classList.remove("pre"); frame.classList.add("built"); qpz.style.display = "none"; qtype.textContent = question; var cs = surface.querySelectorAll(".rescard"); for (var i = 0; i < cs.length; i++) cs[i].classList.add("show"); results.classList.add("gone"); pcard.classList.add("open"); showCta(); return; }
      // Slow, sequential unfold — one idea at a time, with time to read each.
      frame.classList.add("pre"); // hide the search window during beat 1
      setHead("Search your network anywhere you want");
      later(showTabs, 1900); // beat 1: read the message, THEN the three places appear
      later(function () { setHead("Find who you need in seconds"); }, 3500);
      later(function () { frame.classList.remove("pre"); raf2(function () { qpz.classList.add("in"); }); }, 4200); // reveal the bar + the pills
      later(function () { qpz.classList.add("intobar"); }, 5500); // pills glide slowly into the bar
      later(function () { qpz.style.display = "none"; typewriter(qtype, question, buildResults); }, 6700); // type → results → pause → profile opens
    }
    function renderText(animate) {
      surface.innerHTML =
        '<div class="thread"><div class="tmsg me">' + esc(question) + "</div>" +
        '<div class="tmsg gw typing"><span></span><span></span><span></span></div>' +
        '<div class="tmsg gw reply"><span class="gwtag"><span class="gwlogo">' + GWLOGO + "</span>Goodword</span>Found 3 people in your network 👇</div>" +
        bubbles() + "</div>";
      var me = surface.querySelector(".me"), typing = surface.querySelector(".typing"), reply = surface.querySelector(".reply");
      setHead("Find who you need in seconds"); showTabs();
      if (!animate) { var all = surface.querySelectorAll(".tmsg"); for (var i = 0; i < all.length; i++) all[i].classList.add("show"); typing.style.display = "none"; showCta(); return; }
      raf2(function () { me.classList.add("show"); });
      later(function () { typing.classList.add("show"); }, 550);
      later(function () { typing.style.display = "none"; reply.classList.add("show"); stagger(".tres", 220); }, 1300);
    }
    function renderAI(animate) {
      surface.innerHTML =
        '<div class="aiwrap"><div class="ailabel">Ask Goodword right inside</div><div class="ailogos">' + aichip("Claude", "claude") + aichip("ChatGPT", "chatgpt") + aichip("Gemini", "gemini") + aichip("Codex", "codex") + "</div>" +
        '<div class="aichat"><div class="aiuser">' + esc(question) + "</div>" +
        '<div class="airesp"><span class="aiava">' + GWLOGO + '</span><div class="aibody">' +
        '<div class="aistatus">Searching your Goodword network<span class="edots"><i>.</i><i>.</i><i>.</i></span></div>' +
        '<div class="results">' + rows() + "</div></div></div></div></div>";
      var logos = surface.querySelector(".ailogos"), label = surface.querySelector(".ailabel"), aiuser = surface.querySelector(".aiuser"), airesp = surface.querySelector(".airesp"), status = surface.querySelector(".aistatus");
      setHead("Find who you need in seconds"); showTabs();
      if (!animate) { label.classList.add("show"); logos.classList.add("show"); aiuser.classList.add("show"); airesp.classList.add("show"); status.classList.add("done"); var cs = surface.querySelectorAll(".rescard"); for (var i = 0; i < cs.length; i++) cs[i].classList.add("show"); showCta(); return; }
      raf2(function () { label.classList.add("show"); logos.classList.add("show"); });
      later(function () { aiuser.classList.add("show"); }, 450);
      later(function () { airesp.classList.add("show"); }, 1000);
      later(function () { status.classList.add("done"); stagger(".rescard", 150); }, 2100);
    }
    surfaceRender = function (which, animate) { srch.className = "srch2 s-" + which; if (which === "text") renderText(animate); else if (which === "ai") renderAI(animate); else renderApp(animate); };
    surfaceRender("app", !REDUCE);
  }

  function renderRole() {
    barEl.classList.add("on");
    var roleWords = ROLE_ORDER.map(function (k) { return ROLE_PLURAL[k]; });
    var chips = ROLE_ORDER.map(function (k) { return '<button class="rolechip" data-role="' + k + '">' + esc(ROLES[k].label) + "</button>"; }).join("");
    screenEl.innerHTML =
      '<div class="bridge">' +
      '<div class="bhelps"><span class="bhead">Goodword helps</span><span class="brole"></span></div>' +
      '<div class="bsteps">' +
      '<div class="bstep"><b>Consolidate</b> their whole network</div>' +
      '<div class="bstep"><b>Search</b> anyone, instantly</div>' +
      '<div class="bstep"><b>Activate</b> the connections that matter</div>' +
      "</div>" +
      '<div class="bask"><h2>So — which one are you?</h2><div class="rolechips">' + chips + "</div></div>" +
      "</div>";
    screenEl.classList.remove("in"); void screenEl.offsetWidth; screenEl.classList.add("in");
    var brole = screenEl.querySelector(".brole"), steps = screenEl.querySelectorAll(".bstep"), ask = screenEl.querySelector(".bask"), helps = screenEl.querySelector(".bhelps");
    function finish() { brole.textContent = roleWords[0]; helps.classList.add("show"); for (var i = 0; i < steps.length; i++) steps[i].classList.add("show"); ask.classList.add("show"); }
    if (REDUCE) { finish(); return; }
    helps.classList.add("show");
    var ri = 0; brole.textContent = roleWords[0]; brole.classList.add("swap");
    var cycling = true;
    (function spin() { if (!cycling) return; ri = (ri + 1) % roleWords.length; brole.classList.remove("swap"); void brole.offsetWidth; brole.textContent = roleWords[ri]; brole.classList.add("swap"); later(spin, 240); })();
    later(function () { steps[0].classList.add("show"); }, 1550);
    later(function () { steps[1].classList.add("show"); }, 2350);
    later(function () { steps[2].classList.add("show"); }, 3150);
    later(function () { cycling = false; ask.classList.add("show"); }, 3950);
  }
  function renderSell() {
    barEl.classList.add("on");
    var ro = r(), roleKey = state.role || "founder";
    var cl = CLOSE[roleKey] || CLOSE.founder, qt = QUOTES[roleKey] || QUOTES.founder;
    var feats = ro.features.map(function (f) { return '<li><span class="tick">✓</span><span>' + esc(f) + "</span></li>"; }).join("");
    screenEl.innerHTML =
      '<h1 class="reveal" style="--d:0ms">' + cl.h + "</h1>" +
      '<p class="body reveal" style="--d:700ms">' + esc(cl.sub) + "</p>" +
      '<ul class="feat reveal" style="--d:1400ms">' + feats + "</ul>" +
      '<figure class="quote reveal" style="--d:2100ms"><div class="stars">★★★★★</div><p>“' + esc(qt.text) + '”</p><figcaption><span class="qavatar">' + esc(qt.name.charAt(0)) + '</span><span class="qwho"><span class="qname">' + esc(qt.name) + '</span><span class="qrole">' + esc(qt.title) + "</span></span></figcaption></figure>" +
      '<p class="moat reveal" style="--d:2600ms">The biggest moat in the age of AI is <em>your network.</em></p>' +
      '<a class="cta reveal" style="--d:3000ms" data-signup href="' + esc(signupHref()) + '">Get Started for Free</a>';
    screenEl.classList.remove("in"); void screenEl.offsetWidth; screenEl.classList.add("in");
  }

  var RENDER = { goal: renderGoal, value: renderValue, refine: renderRefine, search: renderSearch, role: renderRole, sell: renderSell };
  function paint() { clearTimers(); screenEl.classList.remove("out"); RENDER[current](); paintChrome(); }
  function transitionTo(next) { clearTimers(); if (REDUCE) { current = next; try { window.scrollTo(0, 0); } catch (e) {} paint(); return; } screenEl.classList.add("out"); setTimeout(function () { current = next; try { window.scrollTo(0, 0); } catch (e) {} paint(); }, 300); }
  function go(next) { state.history.push(current); transitionTo(next); }

  screenEl.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("button, a") : null;
    if (!btn) return;
    if (btn.hasAttribute("data-signup")) { var pk = picksNow(); track("funnel_cta_clicked", { goal: state.goal || "", role: state.role || "", refine1: pk[0] || "", refine2: pk[1] || "", query: builtQuery(), ph_distinct_id: phId() }); return; }
    if (btn.hasAttribute("data-goal")) { if (!btn.classList.contains("show")) return; btn.classList.add("chosen"); var v = btn.getAttribute("data-goal"); track("funnel_goal_selected", { goal: v }); later(function () { state.goal = v; state.query = null; go("value"); }, REDUCE ? 0 : 160); return; }
    if (btn.hasAttribute("data-refine")) {
      var gi = +btn.getAttribute("data-refine"), val = btn.getAttribute("data-val");
      state.refine[gi] = val; state.query = null;
      track("funnel_refine_selected", { group: gi, value: val, goal: state.goal || "" });
      var grp = btn.parentNode, cs = grp.querySelectorAll(".rchip");
      for (var k = 0; k < cs.length; k++) cs[k].classList.toggle("on", cs[k] === btn);
      var inp = grp.querySelector(".rtype"); if (inp) inp.value = "";
      return;
    }
    if (btn.hasAttribute("data-tab")) {
      var tabs = screenEl.querySelectorAll(".tab"); for (var ti = 0; ti < tabs.length; ti++) tabs[ti].classList.remove("on"); btn.classList.add("on");
      var want = btn.getAttribute("data-tab");
      if (surfaceRender) surfaceRender(want, !REDUCE);
      return;
    }
    if (btn.hasAttribute("data-role")) { btn.classList.add("chosen"); var v2 = btn.getAttribute("data-role"); track("funnel_role_selected", { role: v2, goal: state.goal || "" }); later(function () { state.role = v2; go("sell"); }, REDUCE ? 0 : 160); return; }
    if (btn.hasAttribute("data-next")) { if (current === "refine") { state.query = g().q(state.refine); } var i = ORDER.indexOf(current); if (i < ORDER.length - 1) go(ORDER[i + 1]); return; }
  });
  screenEl.addEventListener("input", function (e) {
    var t = e.target;
    if (!t || !t.classList || !t.classList.contains("rtype")) return;
    var gi = +t.getAttribute("data-refine-input"), v = (t.value || "").trim(), grp = t.parentNode, cs = grp.querySelectorAll(".rchip");
    if (v) { state.refine[gi] = v; for (var k = 0; k < cs.length; k++) cs[k].classList.remove("on"); }
    else { state.refine[gi] = g().refine[gi].opts[0]; }
    state.query = null;
  });
  backBtn.addEventListener("click", function () { if (!state.history.length) return; current = state.history.pop(); try { window.scrollTo(0, 0); } catch (e) {} paint(); });

  (function net() {
    var ctx = canvas.getContext ? canvas.getContext("2d") : null; if (!ctx) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2), W = 0, H = 0, nodes = [], raf = 0, running = true, t = 0;
    var GREEN = "17,45,10", ACCENT = "29,78,19";
    function resize() {
      W = root.clientWidth || 400; H = root.clientHeight || 800; canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var target = Math.round(Math.min(58, Math.max(26, (W * H) / 22000))); nodes = [];
      for (var i = 0; i < target; i++) nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: 1.2 + Math.random() * 1.8, accent: Math.random() < .24, ph: Math.random() * 6.28 });
    }
    function frame() {
      if (!running) return; t += 0.016; ctx.clearRect(0, 0, W, H);
      var maxD = 140, maxD2 = maxD * maxD;
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i]; a.x += a.vx; a.y += a.vy;
        if (a.x < -20) a.x = W + 20; if (a.x > W + 20) a.x = -20; if (a.y < -20) a.y = H + 20; if (a.y > H + 20) a.y = -20;
        for (var j = i + 1; j < nodes.length; j++) { var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy; if (d2 < maxD2) { var al = (1 - d2 / maxD2) * (0.05 + 0.10 * progress); ctx.strokeStyle = "rgba(" + GREEN + "," + al.toFixed(3) + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); } }
      }
      for (var k = 0; k < nodes.length; k++) {
        var n = nodes[k];
        if (n.accent) {
          var pulse = 0.5 + 0.5 * Math.sin(t * 1.6 + n.ph), glow = (0.2 + 0.5 * progress) * (0.4 + 0.6 * pulse);
          var gr = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 16); gr.addColorStop(0, "rgba(" + ACCENT + "," + (glow * 0.5).toFixed(3) + ")"); gr.addColorStop(1, "rgba(" + ACCENT + ",0)");
          ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(n.x, n.y, 16, 0, 6.2832); ctx.fill();
          ctx.fillStyle = "rgba(" + ACCENT + "," + (0.5 + 0.35 * pulse).toFixed(3) + ")"; ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 0.6, 0, 6.2832); ctx.fill();
        } else { ctx.fillStyle = "rgba(" + GREEN + ",0.26)"; ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.2832); ctx.fill(); }
      }
      raf = requestAnimationFrame(frame);
    }
    resize(); if (REDUCE) { frame(); running = false; } else raf = requestAnimationFrame(frame);
    var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(resize, 200); });
    document.addEventListener("visibilitychange", function () { if (document.hidden) { running = false; cancelAnimationFrame(raf); } else if (!REDUCE) { running = true; raf = requestAnimationFrame(frame); } });
  })();

  track("funnel_landed", {});
  paint();
})();
