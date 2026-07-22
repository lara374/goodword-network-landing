/* Goodword — onboarding funnel bundle (v7, Jul 22): refine→query, 7 outcomes, icons→logo flow.
 * Tiny-loader: <div id="gw-funnel"></div><script src="…/goodword-network-landing@<SHA>/funnel.js"></script>
 * Shadow-DOM isolated. Cream ground, GREEN accent (canopy); clay = action buttons only. Network canvas bg.
 * Flow: goal → value → refine → search → role → sell (6 steps).
 * TODO: real product screenshots; founder copy+proof; confirm Domaine on LP; per-goal search still customer-tuned polish.
 */
(function () {
  var mount = document.getElementById("gw-funnel");
  if (!mount) return;
  var REDUCE = false;
  try { REDUCE = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  window.__GW_ICONS = {"linkedin":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" color=\"#0A66C2\" fill=\"none\" > <path d=\"M19.211 19.0413H16.2181V14.4004C16.2181 13.2937 16.1981 11.8691 14.6614 11.8691C13.1026 11.8691 12.8641 13.0749 12.8641 14.3199V19.041H9.87114V9.49741H12.7444V10.8016H12.7846C13.0721 10.3148 13.4877 9.91439 13.9869 9.64291C14.4861 9.37143 15.0503 9.23911 15.6195 9.26003C18.653 9.26003 19.2123 11.2357 19.2123 13.8059L19.211 19.0413ZM6.4941 8.19287C6.15058 8.19293 5.81476 8.09213 5.5291 7.90321C5.24344 7.71429 5.02079 7.44574 4.88928 7.13153C4.75776 6.81731 4.7233 6.47153 4.79025 6.13792C4.85721 5.80431 5.02258 5.49785 5.26544 5.2573C5.5083 5.01675 5.81774 4.8529 6.15465 4.78649C6.49155 4.72007 6.84077 4.75406 7.15816 4.88417C7.47555 5.01428 7.74685 5.23465 7.93775 5.51743C8.12865 5.8002 8.23058 6.13268 8.23064 6.47282C8.23068 6.69866 8.18579 6.92229 8.09854 7.13095C8.01129 7.33962 7.88341 7.52922 7.72215 7.68895C7.5609 7.84867 7.36944 7.97538 7.15873 8.06184C6.94802 8.1483 6.72219 8.19282 6.4941 8.19287ZM7.99057 19.0413H4.99451V9.49741H7.99057V19.0413ZM20.7031 2.00136H3.49055C3.09988 1.997 2.72341 2.14639 2.44392 2.4167C2.16443 2.68702 2.00477 3.05614 2 3.44297V20.5567C2.0046 20.9438 2.16417 21.3131 2.44365 21.5837C2.72314 21.8543 3.09968 22.004 3.49055 21.9999H20.7031C21.0948 22.0047 21.4724 21.8555 21.753 21.5849C22.0336 21.3143 22.1942 20.9445 22.1996 20.5567V3.44174C22.194 3.05414 22.0333 2.6846 21.7527 2.41429C21.4721 2.14398 21.0946 1.99502 20.7031 2.00013\" fill=\"currentColor\" /> </svg>","gmail":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 12\" fill=\"none\" > <path d=\"M1.089 12H3.633V5.817L0 3.094V10.917C0 11.514 .492 12 1.089 12Z\" fill=\"#4285F4\" /> <path d=\"M12.366 12H14.91C15.518 12 16 11.503 16 10.907V3.094L12.366 5.817V12Z\" fill=\"#34A853\" /> <path d=\"M12.366 1.094V5.817L16 3.094V1.639C16 .288 14.461-.477 13.382.33L12.366 1.094Z\" fill=\"#FBBC04\" /> <path d=\"M3.633 5.817V1.094L8 4.372 12.366 1.094V5.817L8 9.084 3.633 5.817Z\" fill=\"#EA4335\" /> <path d=\"M0 1.639V3.094L3.634 5.817V1.094L2.619.33C1.539-.476 0 .299 0 1.639Z\" fill=\"#C5221F\" /> </svg>","google-calendar":"<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"20\" height=\"20\" viewBox=\"0 0 200 200\" > <g> <g transform=\"translate(3.75 3.75)\"> <path fill=\"#FFFFFF\" d=\"M148.882,43.618l-47.368-5.263l-57.895,5.263L38.355,96.25l5.263,52.632l52.632,6.579l52.632-6.579 l5.263-53.947L148.882,43.618z\" /> <path fill=\"#1A73E8\" d=\"M65.211,125.276c-3.934-2.658-6.658-6.539-8.145-11.671l9.132-3.763c0.829,3.158,2.276,5.605,4.342,7.342 c2.053,1.737,4.553,2.592,7.474,2.592c2.987,0,5.553-0.908,7.697-2.724s3.224-4.132,3.224-6.934c0-2.868-1.132-5.211-3.395-7.026 s-5.105-2.724-8.5-2.724h-5.276v-9.039H76.5c2.921,0,5.382-0.789,7.382-2.368c2-1.579,3-3.737,3-6.487 c0-2.447-0.895-4.395-2.684-5.855s-4.053-2.197-6.803-2.197c-2.684,0-4.816,0.711-6.395,2.145s-2.724,3.197-3.447,5.276 l-9.039-3.763c1.197-3.395,3.395-6.395,6.618-8.987c3.224-2.592,7.342-3.895,12.342-3.895c3.697,0,7.026,0.711,9.974,2.145 c2.947,1.434,5.263,3.421,6.934,5.947c1.671,2.539,2.5,5.382,2.5,8.539c0,3.224-0.776,5.947-2.329,8.184 c-1.553,2.237-3.461,3.947-5.724,5.145v0.539c2.987,1.25,5.421,3.158,7.342,5.724c1.908,2.566,2.868,5.632,2.868,9.211 s-0.908,6.776-2.724,9.579c-1.816,2.803-4.329,5.013-7.513,6.618c-3.197,1.605-6.789,2.421-10.776,2.421 C73.408,129.263,69.145,127.934,65.211,125.276z\" /> <path fill=\"#1A73E8\" d=\"M121.25,79.961l-9.974,7.25l-5.013-7.605l17.987-12.974h6.895v61.197h-9.895L121.25,79.961z\" /> <path fill=\"#EA4335\" d=\"M148.882,196.25l47.368-47.368l-23.684-10.526l-23.684,10.526l-10.526,23.684L148.882,196.25z\" /> <path fill=\"#34A853\" d=\"M33.092,172.566l10.526,23.684h105.263v-47.368H43.618L33.092,172.566z\" /> <path fill=\"#4285F4\" d=\"M12.039-3.75C3.316-3.75-3.75,3.316-3.75,12.039v136.842l23.684,10.526l23.684-10.526V43.618h105.263 l10.526-23.684L148.882-3.75H12.039z\" /> <path fill=\"#188038\" d=\"M-3.75,148.882v31.579c0,8.724,7.066,15.789,15.789,15.789h31.579v-47.368H-3.75z\" /> <path fill=\"#FBBC04\" d=\"M148.882,43.618v105.263h47.368V43.618l-23.684-10.526L148.882,43.618z\" /> <path fill=\"#1967D2\" d=\"M196.25,43.618V12.039c0-8.724-7.066-15.789-15.789-15.789h-31.579v47.368H196.25z\" /> </g> </g> </svg>","outlook":"<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" > <g clip-path=\"url(#clip0_0_142)\"> <g clip-path=\"url(#clip1_0_142)\"> <path d=\"M127.542 66.6442C127.549 65.6433 127.032 64.7117 126.179 64.1884H126.164L126.11 64.1586L81.7569 37.9037C81.5653 37.7743 81.3666 37.6561 81.1615 37.5495C79.449 36.666 77.4147 36.666 75.7021 37.5495C75.4971 37.6561 75.2983 37.7743 75.1068 37.9037L30.7534 64.1586L30.6999 64.1884C29.3443 65.0313 28.9287 66.8137 29.7717 68.1693C30.0201 68.5687 30.3622 68.9014 30.7683 69.1387L75.1218 95.3936C75.314 95.5218 75.5127 95.6401 75.7172 95.7478C77.4297 96.6313 79.464 96.6313 81.1765 95.7478C81.381 95.6401 81.5797 95.5219 81.7719 95.3936L126.125 69.1387C127.011 68.6221 127.552 67.6699 127.542 66.6442Z\" fill=\"#0A2767\" /> <path d=\"M35.924 49.1141H65.0306V75.7947H35.924V49.1141ZM121.589 21.993V9.78838C121.659 6.73693 119.243 4.20571 116.192 4.13259H40.6601C37.6086 4.20571 35.1933 6.73693 35.2632 9.78838V21.993L79.9143 33.9L121.589 21.993Z\" fill=\"#0364B8\" /> <path d=\"M35.2634 21.993H65.0308V48.7837H35.2634V21.993Z\" fill=\"#0078D4\" /> <path d=\"M94.7982 21.993H65.0308V48.7837L94.7982 75.5744H121.589V48.7837L94.7982 21.993Z\" fill=\"#28A8EA\" /> <path d=\"M65.0308 48.7837H94.7982V75.5744H65.0308V48.7837Z\" fill=\"#0078D4\" /> <path d=\"M65.0308 75.5744H94.7982V102.365H65.0308V75.5744Z\" fill=\"#0364B8\" /> <path d=\"M35.9243 75.7947H65.0309V100.049H35.9243V75.7947Z\" fill=\"#14447D\" /> <path d=\"M94.7983 75.5744H121.589V102.365H94.7983V75.5744Z\" fill=\"#0078D4\" /> <path d=\"M126.179 68.975L126.122 69.0047L81.7687 93.9498C81.5752 94.0689 81.3788 94.182 81.1733 94.2832C80.42 94.6419 79.6018 94.8444 78.7681 94.8786L76.345 93.4616C76.1403 93.3589 75.9415 93.2446 75.7497 93.1193L30.8009 67.4657H30.7801L29.3096 66.6442V117.142C29.3325 120.511 32.0815 123.224 35.4506 123.202H121.496C121.547 123.202 121.592 123.178 121.645 123.178C122.357 123.133 123.058 122.987 123.729 122.744C124.019 122.621 124.298 122.476 124.565 122.309C124.765 122.196 125.107 121.949 125.107 121.949C126.632 120.821 127.534 119.039 127.542 117.142V66.6442C127.541 67.61 127.02 68.5006 126.179 68.975Z\" fill=\"url(#paint0_linear_0_142)\" /> <path opacity=\"0.5\" d=\"M125.161 66.4447V69.5406L78.7832 101.472L30.7683 67.4866C30.7683 67.4702 30.755 67.4568 30.7386 67.4568L26.333 64.8075V62.5749L28.1488 62.5451L31.9888 64.748L32.0781 64.7777L32.4055 64.9861C32.4055 64.9861 77.5329 90.7349 77.652 90.7944L79.3785 91.8065C79.5273 91.747 79.6761 91.6875 79.8547 91.6279C79.9441 91.5683 124.655 66.4149 124.655 66.4149L125.161 66.4447Z\" fill=\"#0A2767\" /> <path d=\"M126.179 68.975L126.123 69.0077L81.7691 93.9528C81.5756 94.0718 81.3792 94.1849 81.1737 94.2861C79.4512 95.1276 77.4369 95.1276 75.7144 94.2861C75.5104 94.1851 75.3117 94.0738 75.119 93.9528L30.7657 69.0077L30.7121 68.975C29.8558 68.5107 29.3189 67.6182 29.3101 66.6442V117.142C29.3314 120.51 32.0794 123.224 35.4478 123.202C35.4478 123.202 35.448 123.202 35.4481 123.202H121.404C124.773 123.224 127.521 120.51 127.543 117.142C127.543 117.142 127.543 117.142 127.543 117.142V66.6442C127.541 67.61 127.02 68.5006 126.179 68.975Z\" fill=\"#1490DF\" /> <path opacity=\"0.1\" d=\"M82.4148 93.5837L81.751 93.9558C81.5586 94.0782 81.3599 94.1906 81.1556 94.2921C80.4243 94.6511 79.629 94.8616 78.8159 94.9113L95.6911 114.867L125.128 121.961C125.935 121.352 126.576 120.55 126.995 119.63L82.4148 93.5837Z\" fill=\"black\" /> <path opacity=\"0.05\" d=\"M85.4213 91.8929L81.751 93.9558C81.5586 94.0782 81.3599 94.1906 81.1556 94.2921C80.4243 94.6511 79.629 94.8616 78.8159 94.9113L86.7221 116.71L125.137 121.952C126.65 120.816 127.541 119.034 127.542 117.142V116.49L85.4213 91.8929Z\" fill=\"black\" /> <path d=\"M35.5314 123.202H121.396C122.717 123.209 124.005 122.792 125.072 122.012L76.3425 93.4676C76.1378 93.3649 75.939 93.2506 75.7472 93.1253L30.7984 67.4717H30.7776L29.3101 66.6442V116.969C29.3067 120.408 32.0921 123.199 35.5314 123.202Z\" fill=\"#28A8EA\" /> <path opacity=\"0.1\" d=\"M70.984 33.4029V96.8968C70.9787 99.123 69.625 101.124 67.5607 101.957C66.9212 102.232 66.2325 102.374 65.5365 102.374H29.3096V30.9233H35.2631V27.9465H65.5366C68.5438 27.9579 70.9775 30.3956 70.984 33.4029Z\" fill=\"black\" /> <path opacity=\"0.2\" d=\"M68.0073 36.3796V99.8735C68.0147 100.593 67.8623 101.304 67.5607 101.957C66.734 103.995 64.7588 105.332 62.5598 105.342H29.3096V30.9233H62.5598C63.4235 30.9146 64.2747 31.13 65.0305 31.5484C66.8552 32.4677 68.0066 34.3364 68.0073 36.3796Z\" fill=\"black\" /> <path opacity=\"0.2\" d=\"M68.0073 36.3796V93.92C67.9927 96.9259 65.5657 99.3623 62.5599 99.3883H29.3096V30.9233H62.5598C63.4235 30.9146 64.2747 31.13 65.0305 31.5484C66.8552 32.4677 68.0066 34.3364 68.0073 36.3796Z\" fill=\"black\" /> <path opacity=\"0.2\" d=\"M65.0305 36.3796V93.92C65.0273 96.9306 62.5935 99.3736 59.5831 99.3883H29.3096V30.9233H59.583C62.5932 30.9249 65.0321 33.3665 65.0304 36.3767C65.0305 36.3777 65.0305 36.3786 65.0305 36.3796Z\" fill=\"black\" /> <path d=\"M4.99883 30.9233H59.5744C62.5879 30.9233 65.0308 33.3662 65.0308 36.3796V90.9552C65.0308 93.9687 62.5879 96.4116 59.5744 96.4116H4.99883C1.98534 96.4116 -0.45752 93.9686 -0.45752 90.9552V36.3796C-0.45752 33.3662 1.98541 30.9233 4.99883 30.9233Z\" fill=\"url(#paint1_linear_0_142)\" /> <path d=\"M16.5963 53.8085C17.9411 50.9433 20.1118 48.5455 22.8296 46.9233C25.8395 45.2001 29.2665 44.341 32.7333 44.4406C35.9464 44.371 39.117 45.1855 41.8987 46.7952C44.5141 48.3549 46.6205 50.6402 47.9623 53.3738C49.4235 56.386 50.1518 59.701 50.0877 63.0482C50.1585 66.5464 49.4092 70.0126 47.8998 73.1691C46.526 76.0005 44.3528 78.3672 41.6486 79.9769C38.7597 81.636 35.4714 82.4719 32.1409 82.3941C28.8591 82.4733 25.6187 81.6495 22.7731 80.0127C20.1351 78.4509 18.0022 76.163 16.6291 73.4221C15.1592 70.4535 14.4222 67.1759 14.4799 63.8638C14.4187 60.3954 15.1422 56.958 16.5963 53.8085ZM23.2404 69.9721C23.9574 71.7835 25.1733 73.3544 26.747 74.5028C28.3499 75.623 30.2692 76.201 32.2242 76.1519C34.3061 76.2342 36.3583 75.6365 38.0705 74.4491C39.6243 73.3045 40.8082 71.7293 41.4759 69.9185C42.2222 67.8964 42.5906 65.7542 42.5624 63.5989C42.5855 61.423 42.2392 59.259 41.5384 57.199C40.9194 55.339 39.7736 53.6989 38.2402 52.4779C36.5709 51.2343 34.5242 50.6035 32.4444 50.6918C30.4471 50.6401 28.4848 51.2226 26.8393 52.3558C25.239 53.5089 24 55.0938 23.2672 56.9251C21.6416 61.1227 21.6331 65.7746 23.2433 69.9781L23.2404 69.9721Z\" fill=\"white\" /> <path d=\"M94.7983 21.993H121.589V48.7837H94.7983V21.993Z\" fill=\"#50D9FF\" /> </g> </g> <defs> <linearGradient id=\"paint0_linear_0_142\" x1=\"78.4258\" y1=\"66.6442\" x2=\"78.4258\" y2=\"123.202\" gradientUnits=\"userSpaceOnUse\" > <stop stopColor=\"#35B8F1\" /> <stop offset=\"1\" stopColor=\"#28A8EA\" /> </linearGradient> <linearGradient id=\"paint1_linear_0_142\" x1=\"10.9191\" y1=\"26.6598\" x2=\"53.6542\" y2=\"100.675\" gradientUnits=\"userSpaceOnUse\" > <stop stopColor=\"#1784D9\" /> <stop offset=\"0.5\" stopColor=\"#107AD5\" /> <stop offset=\"1\" stopColor=\"#0A63C9\" /> </linearGradient> <clipPath id=\"clip0_0_142\"> <rect width=\"128\" height=\"128\" fill=\"white\" /> </clipPath> <clipPath id=\"clip1_0_142\"> <rect width=\"128\" height=\"119.07\" fill=\"white\" transform=\"translate(-0.45752 4.13259)\" /> </clipPath> </defs> </svg>","google-contacts":"<svg version=\"1.1\" id=\"logo_x5F_contacts_x5F_192px_1_\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 500 500\" enableBackground=\"new 0 0 500 500\" xmlSpace=\"preserve\" > <g id=\"art_layer\"> <circle id=\"bg_circle\" fill=\"#1A73E8\" cx=\"250\" cy=\"250\" r=\"250\" /> <path id=\"body_shadow\" fill=\"#185ABC\" d=\"M332.4,375H170.5c-19.6,0-36.9-11.8-36.9-31.2V358c0,19.4,17.3,34.1,36.9,34.1h161.9 c19.6,0,36.9-14.7,36.9-34.1v-14.2C369.3,363.2,352,375,332.4,375z\" /> <path id=\"head_shadow\" fill=\"#185ABC\" d=\"M250,227.3c-29.3-0.1-52.4-20.4-54-48.3v11.4c0,28.9,24.2,54,54,54s54-25.1,54-54V179 C301.7,207.1,279.3,227.4,250,227.3z\" /> <g id=\"subject\"> <path id=\"body\" fill=\"#FFFFFF\" d=\"M250,261.4c-57,0-116.5,27.8-116.5,65.3v17c0,19.4,15.9,34.1,35.5,34.1h164.7 c19.6,0,35.5-14.7,35.5-34.1v-17C369.3,289.1,307,261.4,250,261.4z\" /> <circle id=\"head\" fill=\"#FFFFFF\" cx=\"250\" cy=\"176.1\" r=\"54\" /> </g> </g> </svg>","luma":"<svg viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" > <path d=\"M127.57 64C92.46 64 64 35.54 64 .43 64 35.54 35.54 64 .43 64 35.54 64 64 92.46 64 127.57 64 92.46 92.46 64 127.57 64z\" fill=\"currentColor\" /> </svg>","instagram":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" > <path d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z\" fill=\"currentColor\" /> </svg>","tiktok":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" > <path d=\"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z\" fill=\"#000000\" /> </svg>","youtube":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" > <path d=\"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z\" fill=\"#FF0000\" /> </svg>","x":"<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#111\" d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/></svg>"};
  window.__GW_LOGO = "<svg width=\"73\" height=\"48\" viewBox=\"0 0 73 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" > <path d=\"M48.9109 48.0001V24H24.9111C24.9111 37.1667 35.7443 48.0001 48.9109 48.0001Z\" fill=\"#901D00\" /> <path d=\"M24.9111 0V24.0001H48.9109C48.9109 10.8334 38.0777 0 24.9111 0Z\" fill=\"#1D4E13\" /> <path d=\"M0.910156 24.0001H24.9099V0C11.7434 0 0.910156 10.8334 0.910156 24.0001Z\" fill=\"#71955E\" /> <path d=\"M24.9099 48.0001V24H0.910156C0.910156 37.1667 11.7434 48.0001 24.9099 48.0001Z\" fill=\"#A2BB8A\" /> <path d=\"M48.9109 24H24.9111V48.0001C38.0777 48.0001 48.9109 37.1667 48.9109 24Z\" fill=\"#D1D7B5\" /> <path d=\"M48.9111 0V24.0001H72.9109C72.9109 10.8334 62.0777 0 48.9111 0Z\" fill=\"#E1AE89\" /> <path d=\"M24.9111 24.0001H48.9109V0C35.7443 0 24.9111 10.8334 24.9111 24.0001Z\" fill=\"#F1DEC5\" /> <path d=\"M72.9109 24H48.9111V48.0001C62.0777 48.0001 72.9109 37.1667 72.9109 24Z\" fill=\"#B86845\" /> </svg>";
  var ICON_ORDER = ["linkedin", "gmail", "google-calendar", "outlook", "google-contacts", "luma", "instagram", "x", "tiktok", "youtube"];

  var GOALS = {
    customer: { label: "My next customer", hook: "Your next customer is already in your network.",
      refineHead: "Who's your ideal customer?",
      refine: [{ label: "What are you selling?", opts: ["SaaS", "A product", "A service", "A marketplace"] }, { label: "To whom?", opts: ["Startups", "Enterprise", "SMBs", "Consumers"] }],
      q: function (p) { return "who's a warm " + p[1].toLowerCase() + " lead for my " + p[0].toLowerCase() + "?"; },
      person: { role: "VP Partnerships · Acme", match: "Ideal customer fit", history: "Met at SaaStr · last spoke in March · 2 mutual connections", act: "Draft a warm intro" } },
    client: { label: "A client deal", hook: "Your next client deal is already in your network.",
      refineHead: "What kind of client?",
      refine: [{ label: "What do you offer?", opts: ["Consulting", "Agency work", "Freelance", "Advisory"] }, { label: "For which industry?", opts: ["Tech", "Finance", "Healthcare", "Retail", "Media"] }],
      q: function (p) { return "who needs " + p[0].toLowerCase() + " in " + p[1].toLowerCase() + "?"; },
      person: { role: "Head of Ops · Meridian", match: "Fits your service", history: "Met through a mutual client · warm intro available", act: "Draft a warm intro" } },
    investor: { label: "My next investor", hook: "Your next investor is already in your network.",
      refineHead: "Tell us about your raise",
      refine: [{ label: "What stage are you raising?", opts: ["Pre-seed", "Seed", "Series A", "Series B+"] }, { label: "What are you building in?", opts: ["Software", "AI", "Fintech", "Health", "Consumer", "Climate"] }],
      q: function (p) { return p[0].toLowerCase() + "-stage investors who back " + p[1].toLowerCase(); },
      person: { role: "Partner · Northstar Ventures", match: "Backs your stage & space", history: "Met at a founder dinner · 3 founders you know are in her portfolio", act: "Draft a warm intro" } },
    hire: { label: "My next hire", hook: "Your next hire is already in your network.",
      refineHead: "Who are you hiring?",
      refine: [{ label: "Hiring for?", opts: ["Engineering", "Sales", "Design", "Marketing", "Ops"] }, { label: "Seniority?", opts: ["Junior", "Mid", "Senior", "Lead / Exec"] }],
      q: function (p) { return (p[1] === "Lead / Exec" ? "leadership" : p[1].toLowerCase()) + " " + p[0].toLowerCase() + " candidates in my network"; },
      person: { role: "Staff Engineer · ex-Stripe", match: "Matches the role", history: "Met at a hackathon · vouched for by 2 people you trust", act: "Draft a warm intro" } },
    career: { label: "My next career move", hook: "Your next career move starts with someone you know.",
      refineHead: "What move are you making?",
      refine: [{ label: "Looking for what?", opts: ["A founder role", "An exec seat", "An IC role", "Board / advisory"] }, { label: "In which space?", opts: ["Tech", "AI", "Finance", "Healthcare", "Climate"] }],
      q: function (p) { return "who can open doors to " + p[0].toLowerCase() + "s in " + p[1].toLowerCase() + "?"; },
      person: { role: "Director · Acme (hiring now)", match: "Hiring for roles like yours", history: "2nd degree · your mentor knows her well", act: "Ask for a warm intro" } },
    partnership: { label: "A partnership", hook: "Your next partnership is already in your network.",
      refineHead: "What kind of partnership?",
      refine: [{ label: "What type?", opts: ["Distribution", "Integration", "Co-marketing", "Reseller"] }, { label: "In which industry?", opts: ["Tech", "Finance", "Healthcare", "Retail", "Media"] }],
      q: function (p) { return p[0].toLowerCase() + " partners in " + p[1].toLowerCase(); },
      person: { role: "BD Lead · Northwind", match: "Strong partnership fit", history: "Met at a conference · already partners with 2 companies you know", act: "Draft a warm intro" } },
    advisor: { label: "An advisor", hook: "The advisor you need is already in your network.",
      refineHead: "What do you need advice on?",
      refine: [{ label: "Advice on?", opts: ["Fundraising", "Go-to-market", "Product", "Hiring", "Scaling"] }, { label: "At what stage?", opts: ["Idea", "Pre-seed", "Seed", "Growth"] }],
      q: function (p) { return "advisors who've nailed " + p[0].toLowerCase() + " at " + p[1].toLowerCase() + " stage"; },
      person: { role: "2x Founder · Advisor", match: "Been exactly where you are", history: "Met at a workshop · backed by people you trust", act: "Ask to connect" } }
  };
  var ROLES = {
    founder: { label: "Founder", features: ["Hiring & fundraising searches across your real network", "Warm paths to any investor or candidate", "Context before every meeting"] },
    investor: { label: "Investor", features: ["Portfolio & founder groups you can share", "Source from people you already know", "Never lose a founder relationship to time"] },
    recruiter: { label: "Recruiter", features: ["Candidate search in plain language", "Warm referral paths, not cold InMails", "Every past candidate, one query away"] },
    sales: { label: "Sales or BD", features: ["Prospects hiding in your existing network", "Who-knows-whom paths to every account", "Follow-up nudges that keep deals warm"] },
    community: { label: "Community builder", features: ["Curated groups you can pull up in a second", "Intro suggestions both directions", "The details that make you memorable"] },
    operator: { label: "Operator", features: ["Every conversation captured automatically", "Context before every meeting", "Follow-ups tracked so nothing slips"] }
  };
  var GOAL_ORDER = ["customer", "client", "investor", "hire", "career", "partnership", "advisor"];
  var ROLE_ORDER = ["founder", "investor", "recruiter", "sales", "community", "operator"];
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
  .screen{width:100%;max-width:620px;flex:1;display:flex;flex-direction:column;padding:26px 24px 44px;}\
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
  .opener{flex:1;display:flex;flex-direction:column;justify-content:center;min-height:66vh;}\
  .opener h1{font-size:clamp(30px,8vw,48px);}\
  .reelwrap{font-family:'Domaine Display',Georgia,serif;font-size:clamp(26px,7vw,40px);line-height:1.1;margin-top:8px;min-height:1.3em;}\
  .reel{font-style:italic;color:var(--green);display:inline-block;transition:opacity .12s ease,transform .12s ease;}\
  .reel.flip{opacity:.25;transform:translateY(-6px);}\
  .skiphint{position:absolute;bottom:20px;left:0;right:0;text-align:center;font-size:12px;letter-spacing:.08em;color:var(--muted);opacity:0;transition:opacity .5s;}\
  .skiphint.on{opacity:.6;}\
  .beats{display:flex;flex-direction:column;gap:22px;flex:1;}\
  .beat .beat-h{font-family:'Domaine Display','Domaine Text',Georgia,serif;font-size:clamp(21px,5.4vw,27px);line-height:1.2;color:var(--ink);margin:0 0 14px;}\
  .beat .beat-h em{color:var(--green);font-style:italic;}\
  .consolidate{text-align:center;}\
  .itiles{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;transition:transform .7s cubic-bezier(.5,.1,.2,1),opacity .6s ease;}\
  .itiles.flow{transform:translateY(30px) scale(.7);opacity:0;}\
  .itile{width:46px;height:46px;border-radius:14px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;box-shadow:0 6px 16px -12px rgba(29,78,19,.5);opacity:0;transform:translateY(8px) scale(.9);transition:opacity .4s ease,transform .4s cubic-bezier(.2,.8,.2,1);}\
  .itile.show{opacity:1;transform:none;}\
  .itile svg{width:26px !important;height:26px !important;display:block;}\
  .gwmark{width:72px;margin:6px auto 12px;opacity:0;transform:scale(.55);transition:opacity .6s ease,transform .7s cubic-bezier(.2,.8,.2,1);}\
  .gwmark.show{opacity:1;transform:scale(1);}\
  .gwmark svg{width:100%;height:auto;display:block;}\
  .ccap{font-family:'Domaine Display','Domaine Text',Georgia,serif;font-size:clamp(20px,5.2vw,26px);color:var(--ink);margin:0;opacity:0;transform:translateY(8px);transition:opacity .5s ease,transform .5s ease;}\
  .ccap.show{opacity:1;transform:none;}\
  .csub{font-size:15.5px;color:var(--muted);margin:6px 0 0;opacity:0;transition:opacity .5s ease;}\
  .csub.show{opacity:1;}\
  .rgroup{margin-bottom:22px;}\
  .rlabel{font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:var(--green);font-weight:700;margin-bottom:11px;}\
  .rchips{display:flex;flex-wrap:wrap;gap:9px;}\
  .rchip{font:inherit;font-size:15px;font-weight:500;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:999px;padding:11px 17px;cursor:pointer;transition:transform .15s,border-color .15s,background .15s,box-shadow .15s;}\
  .rchip:hover{transform:translateY(-1px);border-color:var(--green-soft);}\
  .rchip.on{border-color:var(--green);background:linear-gradient(180deg,#fff,var(--green-tint));color:var(--green);font-weight:600;box-shadow:0 8px 20px -12px rgba(29,78,19,.5);}\
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
  .reveal{opacity:0;transform:translateY(14px);}\
  .screen.in .reveal{animation:rise .55s cubic-bezier(.2,.8,.2,1) forwards;animation-delay:var(--d,0ms);}\
  .screen.out{opacity:0;transform:translateY(-10px) scale(.995);transition:opacity .2s ease,transform .2s ease;}\
  @keyframes rise{to{opacity:1;transform:none;}}\
  @media (prefers-reduced-motion:reduce){.reveal,.fade,.itile,.itiles,.gwmark,.ccap,.csub{opacity:1!important;transform:none!important;animation:none!important;transition:none!important;}.cta:before,.cursor{animation:none;}.screen.out{transition:none;}}\
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
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function g() { return GOALS[state.goal || "customer"]; }
  function r() { return ROLES[state.role || "founder"]; }
  function builtQuery() { var o = g(); return state.query || o.q(o.refine.map(function (gr) { return gr.opts[0]; })); }
  function signupHref() {
    var p; try { p = new URLSearchParams(location.search); } catch (e) { p = new URLSearchParams(); }
    p.set("goal", state.goal || "customer"); if (state.role) p.set("role", state.role);
    if (!p.get("utm_source")) p.set("utm_source", "funnel"); p.set("lp", "start");
    return "https://app.goodword.com/auth/signup?" + p.toString();
  }
  function paintChrome() {
    var idx = ORDER.indexOf(current); progress = idx / (ORDER.length - 1);
    for (var i = 0; i < dots.length; i++) dots[i].className = i < idx ? "done" : (i === idx ? "cur" : "");
    stepEl.textContent = "Step " + (idx + 1) + " of " + ORDER.length;
    backBtn.disabled = state.history.length === 0;
    if (typeof window.gwFunnelStep === "function") { try { window.gwFunnelStep(current, { goal: state.goal, role: state.role, query: state.query }); } catch (e) {} }
  }

  // ---- GOAL opener ----
  function goalOptionsHTML() {
    return GOAL_ORDER.map(function (k) { return '<button class="opt fade" data-goal="' + k + '">' + esc(GOALS[k].label) + "</button>"; }).join("");
  }
  function renderGoal() {
    barEl.classList.remove("on");
    screenEl.innerHTML =
      '<div class="opener">' +
      '<h1 class="q fade">What the right connection could <em>unlock</em> for you right now.</h1>' +
      '<div class="reelwrap q2 fade"><span class="reel">' + esc(REEL[0]) + '</span></div>' +
      '<div class="opts" style="margin-top:22px"></div></div>' +
      '<div class="skiphint">tap to skip</div>';
    var q = screenEl.querySelector(".q"), reelWrap = screenEl.querySelector(".reelwrap"),
      reel = screenEl.querySelector(".reel"), opts = screenEl.querySelector(".opts"), hint = screenEl.querySelector(".skiphint");
    var done = false;
    function revealOptions() {
      if (done) return; done = true; barEl.classList.add("on"); reelWrap.classList.add("gone");
      later(function () {
        opts.innerHTML = goalOptionsHTML();
        var os = opts.querySelectorAll(".opt");
        for (var i = 0; i < os.length; i++) (function (el, i) { later(function () { el.classList.add("show"); }, i * 60); })(os[i], i);
        hint.classList.remove("on");
      }, 260);
    }
    function skip() { if (done) return; clearTimers(); q.classList.add("show"); reelWrap.classList.remove("show"); revealOptions(); }
    function skipOnce() { if (!done) skip(); root.removeEventListener("click", skipOnce, true); }
    root.addEventListener("click", skipOnce, true);
    if (REDUCE) { q.classList.add("show"); revealOptions(); return; }
    raf2(function () { q.classList.add("show"); });
    later(function () { hint.classList.add("on"); }, 1100);
    later(function () { reelWrap.classList.add("show"); spinReel(reel, revealOptions); }, 1500);
  }
  function spinReel(el, doneCb) {
    var i = 0, ticks = 0, total = 16;
    function step() {
      var delay = 55 + Math.round(Math.pow(ticks / total, 2.4) * 320);
      el.classList.add("flip");
      later(function () { i = (i + 1) % REEL.length; el.textContent = REEL[i]; el.classList.remove("flip"); ticks++; if (ticks <= total) later(step, delay); else later(doneCb, 520); }, 70);
    }
    step();
  }

  // ---- VALUE (hook → icons flow into logo → captions → teaser) ----
  function renderValue() {
    barEl.classList.add("on");
    var o = g();
    var tiles = ICON_ORDER.map(function (k) { return '<span class="itile" data-icn="' + k + '">' + (window.__GW_ICONS && window.__GW_ICONS[k] ? window.__GW_ICONS[k] : "") + "</span>"; }).join("");
    var logo = (window.__GW_LOGO || "");
    screenEl.innerHTML =
      '<div class="beats">' +
      '<div class="beat b1"><h1 class="fade">' + esc(o.hook) + "</h1></div>" +
      '<div class="beat b2 fade"><div class="consolidate"><div class="itiles">' + tiles + "</div>" +
      '<div class="gwmark">' + logo + "</div>" +
      '<p class="ccap">Goodword pulls everyone into <em style="color:var(--green);font-style:italic">one place</em>.</p>' +
      '<p class="csub">Who you need, when you need it.</p></div></div>' +
      '<div class="beat b3 fade"><p class="beat-h">Then find exactly who you need, the moment it matters.</p></div>' +
      "</div>" +
      '<button class="cta fade" data-next style="margin-top:26px">Show me how</button>';
    var b1 = screenEl.querySelector(".b1 h1"), b2 = screenEl.querySelector(".b2"), b3 = screenEl.querySelector(".b3"),
      cta = screenEl.querySelector(".cta"), itiles = screenEl.querySelector(".itiles"),
      gwmark = screenEl.querySelector(".gwmark"), ccap = screenEl.querySelector(".ccap"), csub = screenEl.querySelector(".csub"),
      tileEls = screenEl.querySelectorAll(".itile");
    var doneV = false;
    function finishAll() {
      if (doneV) return; doneV = true; clearTimers();
      b1.classList.add("show"); b2.classList.add("show"); b3.classList.add("show"); cta.classList.add("show");
      for (var i = 0; i < tileEls.length; i++) tileEls[i].classList.add("show");
      gwmark.classList.add("show"); ccap.classList.add("show"); csub.classList.add("show");
    }
    function vskip(e) { if (e.target.closest && e.target.closest(".cta,.back")) return; if (!doneV) finishAll(); root.removeEventListener("click", vskip, true); }
    root.addEventListener("click", vskip, true);
    if (REDUCE) { finishAll(); return; }
    raf2(function () { b1.classList.add("show"); });
    var tIn = 1200;
    later(function () { b2.classList.add("show"); for (var i = 0; i < tileEls.length; i++) (function (el, i) { later(function () { el.classList.add("show"); }, i * 80); })(tileEls[i], i); }, tIn);
    var tFlow = tIn + ICON_ORDER.length * 80 + 500;
    later(function () { itiles.classList.add("flow"); gwmark.classList.add("show"); }, tFlow);
    later(function () { ccap.classList.add("show"); }, tFlow + 650);
    later(function () { csub.classList.add("show"); }, tFlow + 950);
    later(function () { b3.classList.add("show"); }, tFlow + 1400);
    later(function () { cta.classList.add("show"); }, tFlow + 1800);
  }

  // ---- REFINE (per-goal categories → builds the search query) ----
  function renderRefine() {
    barEl.classList.add("on");
    var o = g();
    if (!state.refine || state.refineGoal !== state.goal) { state.refine = o.refine.map(function (gr) { return gr.opts[0]; }); state.refineGoal = state.goal; }
    var groups = o.refine.map(function (gr, gi) {
      var chips = gr.opts.map(function (opt) { return '<button class="rchip' + (state.refine[gi] === opt ? " on" : "") + '" data-refine="' + gi + '" data-val="' + esc(opt) + '">' + esc(opt) + "</button>"; }).join("");
      return '<div class="rgroup reveal" style="--d:' + (110 + gi * 130) + 'ms"><div class="rlabel">' + esc(gr.label) + '</div><div class="rchips">' + chips + "</div></div>";
    }).join("");
    screenEl.innerHTML =
      '<h1 class="reveal" style="--d:0ms">' + esc(o.refineHead) + "</h1>" +
      '<p class="body reveal" style="--d:70ms">Tap what fits. We’ll point the search right at it.</p>' +
      groups +
      '<button class="cta reveal" style="--d:' + (110 + o.refine.length * 130 + 120) + 'ms" data-next>Find them</button>';
    screenEl.classList.remove("in"); void screenEl.offsetWidth; screenEl.classList.add("in");
  }

  // ---- SEARCH (uses built query; per-goal Sarah Chen) ----
  function renderSearch() {
    barEl.classList.add("on");
    var o = g(), qy = builtQuery(), s = o.person;
    var app = '<div class="sbar"><span class="mag">⌕</span><span>' + esc(qy) + '</span><span class="cursor"></span></div>';
    var text = '<div class="bub me">' + esc(qy) + '</div><div class="bub gw"><span class="gwtag">Goodword</span>On it, one sec…</div>';
    var ai = '<div class="aibar"><span class="gwchip">◑ Goodword</span><span>' + esc(qy) + '</span></div><div class="airow"><span>Claude</span><span>ChatGPT</span><span>Gemini</span></div>';
    screenEl.innerHTML =
      '<h1 class="reveal" style="--d:0ms">Ask <em>wherever</em> you already work.</h1>' +
      '<p class="body reveal" style="--d:70ms">In the app, over text, or right inside your AI. Goodword finds the right person.</p>' +
      '<div class="srch reveal" style="--d:140ms"><div class="tabs"><button class="tab on" data-tab="app">In the app</button><button class="tab" data-tab="text">Over text</button><button class="tab" data-tab="ai">In your AI</button></div>' +
      '<div class="panel" data-panel="app">' + app + '</div><div class="panel" hidden data-panel="text">' + text + '</div><div class="panel" hidden data-panel="ai">' + ai + "</div></div>" +
      '<div class="found reveal" style="--d:220ms"><div class="found-label">…and finds the one who fits</div>' +
      '<div class="pcard"><div class="pc-top"><span class="pc-av">SC</span><div class="pc-id"><b>Sarah Chen</b><small>' + esc(s.role) + '</small></div><span class="pc-badge">' + esc(s.match) + '</span></div>' +
      '<div class="pc-hist">' + esc(s.history) + '</div><span class="pc-act">' + esc(s.act) + ' →</span></div></div>' +
      '<button class="cta reveal" style="--d:300ms" data-next>Next</button>';
    screenEl.classList.remove("in"); void screenEl.offsetWidth; screenEl.classList.add("in");
  }

  function renderRole() {
    barEl.classList.add("on");
    var opts = ROLE_ORDER.map(function (k, i) { return '<button class="opt reveal" style="--d:' + (120 + i * 50) + 'ms" data-role="' + k + '">' + esc(ROLES[k].label) + "</button>"; }).join("");
    screenEl.innerHTML = '<h1 class="reveal" style="--d:0ms">What best describes you?</h1><div class="opts">' + opts + "</div>";
    screenEl.classList.remove("in"); void screenEl.offsetWidth; screenEl.classList.add("in");
  }
  function renderSell() {
    barEl.classList.add("on");
    var ro = r();
    var feats = ro.features.map(function (f) { return '<li><span class="tick">✓</span><span>' + esc(f) + "</span></li>"; }).join("");
    screenEl.innerHTML =
      '<h1 class="reveal" style="--d:0ms">Your network, <em>put to work</em></h1>' +
      '<p class="body reveal" style="--d:80ms">Goodword turns the people you already know into your next deal, hire, or intro.</p>' +
      '<div class="media reveal" style="--d:150ms"><span>product preview — ' + esc(ro.label.toLowerCase()) + " view</span></div>" +
      '<ul class="feat reveal" style="--d:220ms">' + feats + "</ul>" +
      '<div class="draft reveal" style="--d:280ms"><b>Founder proof — to write</b>A short line from the team on how a ' + esc(ro.label.toLowerCase()) + " wins with Goodword.</div>" +
      '<a class="cta reveal" style="--d:340ms" data-signup href="' + esc(signupHref()) + '">Get started for free</a>';
    screenEl.classList.remove("in"); void screenEl.offsetWidth; screenEl.classList.add("in");
  }

  var RENDER = { goal: renderGoal, value: renderValue, refine: renderRefine, search: renderSearch, role: renderRole, sell: renderSell };
  function paint() { clearTimers(); screenEl.classList.remove("out"); RENDER[current](); paintChrome(); }
  function transitionTo(next) { clearTimers(); if (REDUCE) { current = next; try { window.scrollTo(0, 0); } catch (e) {} paint(); return; } screenEl.classList.add("out"); setTimeout(function () { current = next; try { window.scrollTo(0, 0); } catch (e) {} paint(); }, 200); }
  function go(next) { state.history.push(current); transitionTo(next); }

  screenEl.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("button, a") : null;
    if (!btn) return;
    if (btn.hasAttribute("data-signup")) return;
    if (btn.hasAttribute("data-goal")) { if (!btn.classList.contains("show")) return; btn.classList.add("chosen"); var v = btn.getAttribute("data-goal"); later(function () { state.goal = v; state.query = null; go("value"); }, REDUCE ? 0 : 160); return; }
    if (btn.hasAttribute("data-refine")) {
      var gi = +btn.getAttribute("data-refine"), val = btn.getAttribute("data-val");
      state.refine[gi] = val; state.query = null;
      var grp = btn.parentNode, cs = grp.querySelectorAll(".rchip");
      for (var k = 0; k < cs.length; k++) cs[k].classList.toggle("on", cs[k] === btn);
      return;
    }
    if (btn.hasAttribute("data-tab")) {
      var tabs = screenEl.querySelectorAll(".tab"); for (var ti = 0; ti < tabs.length; ti++) tabs[ti].classList.remove("on"); btn.classList.add("on");
      var want = btn.getAttribute("data-tab"), panels = screenEl.querySelectorAll(".panel");
      for (var pi = 0; pi < panels.length; pi++) panels[pi].hidden = (panels[pi].getAttribute("data-panel") !== want);
      return;
    }
    if (btn.hasAttribute("data-role")) { btn.classList.add("chosen"); var v2 = btn.getAttribute("data-role"); later(function () { state.role = v2; go("sell"); }, REDUCE ? 0 : 160); return; }
    if (btn.hasAttribute("data-next")) { if (current === "refine") { state.query = g().q(state.refine); } var i = ORDER.indexOf(current); if (i < ORDER.length - 1) go(ORDER[i + 1]); return; }
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

  paint();
})();
