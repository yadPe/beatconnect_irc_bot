import React from 'react';

export default function(name, style, customColor) {
  let fill = style === 'dark' ? '#ffffff' : '#000000';
  if (customColor) fill = customColor;
  switch (name) {
    case 'Start':
      return (
        <svg x="0px" y="0px" width="16px" height="14.9px" viewBox="0 0 306.773 306.773">
          <path
            fill={fill}
            d="M302.93,149.794c5.561-6.116,5.024-15.49-1.199-20.932L164.63,8.898
          c-6.223-5.442-16.2-5.328-22.292,0.257L4.771,135.258c-6.092,5.585-6.391,14.947-0.662,20.902l3.449,3.592
          c5.722,5.955,14.971,6.665,20.645,1.581l10.281-9.207v134.792c0,8.27,6.701,14.965,14.965,14.965h53.624
          c8.264,0,14.965-6.695,14.965-14.965v-94.3h68.398v94.3c-0.119,8.264,5.794,14.959,14.058,14.959h56.828
          c8.264,0,14.965-6.695,14.965-14.965V154.024c0,0,2.84,2.488,6.343,5.567c3.497,3.073,10.842,0.609,16.403-5.513L302.93,149.794z"
          />
        </svg>
      );
    case 'Settings':
      return (
        <svg x="0px" y="0px" width="18px" height="18px" viewBox="0 0 480.3 480.3">
          <g>
            <g>
              <path
                fill={fill}
                d="M254.15,234.1V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v220.6c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v98.2
                  c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-98.2c31.3-6.3,55-34,55-67.2C309.15,268.2,285.55,240.4,254.15,234.1z M240.65,342.8
                  c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S263.55,342.8,240.65,342.8z"
              />
              <path
                fill={fill}
                d="M88.85,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.4
                  c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S120.15,127.2,88.85,120.9z M75.35,229.6
                  c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S98.15,229.6,75.35,229.6z"
              />
              <path
                fill={fill}
                d="M418.45,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.5
                  c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S449.85,127.2,418.45,120.9z M404.95,229.6
                  c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S427.85,229.6,404.95,229.6z"
              />
            </g>
          </g>
        </svg>
      );
    case 'Matchs':
      return (
        <svg x="0px" y="0px" width="16px" height="15.6px" viewBox="0 0 512 512">
          <path
            fill={fill}
            d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M344.48,269.57l-128,80
          c-2.59,1.617-5.535,2.43-8.48,2.43c-2.668,0-5.34-0.664-7.758-2.008C195.156,347.172,192,341.82,192,336V176
          c0-5.82,3.156-11.172,8.242-13.992c5.086-2.836,11.305-2.664,16.238,0.422l128,80c4.676,2.93,7.52,8.055,7.52,13.57
          S349.156,266.641,344.48,269.57z"
          />
        </svg>
      );
    case 'Back':
      return (
        <svg x="0px" y="0px" width="16px" height="15.6px" viewBox="0 0 129 129">
          <g>
            <path
              fill={fill}
              d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"
            />
          </g>
        </svg>
      );
    case 'Play':
      return (
        <svg x="0px" y="0px" width="16px" height="15.6px" viewBox="0 0 41.999 41.999">
          <path
            fill={fill}
            d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
            c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
            c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"
          />
        </svg>
      );
    case 'Download':
      return (
        <svg x="0px" y="0px" width="16px" height="15.6px" viewBox="0 0 433.5 433.5">
          <path
            fill={fill}
            d="M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z"
          />
        </svg>
      );
    case 'Downloads':
      return (
        <svg x="0px" y="0px" width="16px" height="15.6px" viewBox="0 0 433.5 433.5">
          <path
            fill={fill}
            d="M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z"
          />
        </svg>
      );
    case 'Search':
      return (
        <svg x="0px" y="0px" width="16px" height="15.6px" viewBox="0 0 56.966 56.966">
          <path
            fill={fill}
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
            s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
            c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
            s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      );
    case 'Music':
      return (
        <svg x="0px" y="0px" width="17px" height="17px" viewBox="0 0 512 512">
          <g>
            <g>
              <path
                fill={fill}
                d="M332.978,110.056l-133.567,26.713c-15.554,3.111-26.844,16.882-26.844,32.744c0,3.823,0,133.145,0,139.447
			c-5.226-1.853-10.843-2.872-16.696-2.872c-27.618,0-50.088,22.469-50.088,50.088s22.469,50.087,50.088,50.087
			s49.976-22.469,49.976-50.087V236.296l133.678-26.713v65.985c-5.226-1.853-10.843-2.872-16.696-2.872
			c-27.618,0-50.087,22.469-50.087,50.088c0,27.618,22.469,50.087,50.087,50.087c27.618,0,49.976-22.469,49.976-50.087
			c0-1.449,0-175.296,0-179.984C372.806,121.709,353.624,105.93,332.978,110.056z M155.872,372.871
			c-9.206,0-16.696-7.49-16.696-16.696c0-9.206,7.49-16.696,16.696-16.696c9.206,0,16.696,7.49,16.696,16.696
			C172.568,365.382,165.078,372.871,155.872,372.871z M322.83,339.48c-9.206,0-16.696-7.49-16.696-16.696s7.49-16.696,16.696-16.696
			c9.206,0,16.696,7.49,16.696,16.696S332.036,339.48,322.83,339.48z M339.527,175.53l-133.678,26.713v-32.731l133.678-26.713
			V175.53z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                fill={fill}
                d="M453.023,92.472C404.186,33.704,332.391,0,256.05,0C127.521,0,25.163,92.142,4.21,209.43
			c-10.169,56.914-1.743,113.413,24.356,163.824L0.641,491.323c-2.857,12.074,8.034,22.95,20.091,20.09l118.071-27.933
			C174.985,502.157,215.363,512,256.01,512c0.01,0,0.023,0,0.035,0c126.875,0,229.778-90.628,251.444-206.992
			C521.694,228.681,501.842,151.214,453.023,92.472z M474.661,298.898c-18.782,100.871-108.006,179.711-218.619,179.711
			c-0.011,0-0.019,0-0.03,0c-37.211,0-74.174-9.495-106.89-27.461c-3.594-1.973-7.831-2.572-11.88-1.612l-97.883,23.157
			l23.153-97.889c0.952-4.025,0.376-8.26-1.616-11.885c-24.78-45.081-33.015-96.126-23.815-147.616
			C55.08,114.551,142.916,33.392,256.05,33.392c66.385,0,128.818,29.312,171.293,80.422
			C469.797,164.898,487.044,232.36,474.661,298.898z"
              />
            </g>
          </g>
        </svg>
      );
    case 'Pause':
      return (
        <svg x="0px" y="0px" width="17px" height="17px" viewBox="0 0 357 357">
          <g>
            <path fill={fill} d="M25.5,357h102V0h-102V357z M229.5,0v357h102V0H229.5z" />
          </g>
        </svg>
      );
    case 'Checked':
      return (
        <svg x="0px" y="0px" width="17px" height="17px" viewBox="0 0 26 26">
          <path
            fill={fill}
            d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"
          />
        </svg>
      );
    case 'Cancel':
      return (
        <svg x="0px" y="0px" width="17px" height="17px" viewBox="0 0 47.971 47.971">
          <path
            fill={fill}
            d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
            c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
            C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
            s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
          />
        </svg>
      );
    case 'Beatmaps':
      return (
        <svg x="0px" y="0px" width="19px" height="19px" viewBox="0 0 60 60">
          <g>
            <rect y="4" width="10" height="52" fill={fill} />
            <path
              fill={fill}
              d="M12,4v52h48V4H12z M51,15v5v15c0,3.309-2.916,6-6.5,6S38,38.309,38,35s2.916-6,6.5-6c1.746,0,3.331,0.642,4.5,1.68v-9.51
              l-17,2.684v17.248c0,0.013-0.007,0.025-0.008,0.038C31.911,44.383,29.033,47,25.5,47c-3.584,0-6.5-2.691-6.5-6s2.916-6,6.5-6
              c1.746,0,3.331,0.642,4.5,1.68V23v-2.714V17c0-0.492,0.358-0.911,0.844-0.987l19-3c0.294-0.047,0.583,0.037,0.806,0.228
              C50.872,13.43,51,13.708,51,14V15z"
            />
          </g>
        </svg>
      );
    case 'Bot':
      return (
        <svg x="0px" y="0px" width="19px" height="19px" viewBox="0 0 612 612">
          <path
            fill={fill}
            d="M612,342.869l-72.243,150.559c-9.036,17.516-27.098,28.521-46.808,28.521H66.974c-7.85,0-12.942-8.277-9.402-15.285
            l0.179-0.355c5.778-11.439,2.35-25.383-8.074-32.836l-0.589-0.422c-24.197-17.305-38.554-45.225-38.554-74.973v-34.141h379.228
            v-0.211c0-11.52,9.338-20.857,20.856-20.857H612L612,342.869z M368.693,216.46h-73.738c-5.818,0-10.534,4.716-10.534,10.534
            v115.875c0,5.818,4.716,10.535,10.534,10.535h73.738c5.817,0,10.534-4.717,10.534-10.535V226.994
            C379.228,221.176,374.511,216.46,368.693,216.46z M495.102,258.596h-84.272c-5.817,0-10.534,4.716-10.534,10.534v42.135
            c0,5.818,4.717,10.535,10.534,10.535h84.272c5.818,0,10.534-4.717,10.534-10.535V269.13
            C505.636,263.312,500.92,258.596,495.102,258.596z M168.545,353.402h84.272c5.818,0,10.534-4.717,10.534-10.533v-84.273
            c0-5.818-4.716-10.534-10.534-10.534h-84.272c-5.818,0-10.534,4.716-10.534,10.534v84.273
            C158.012,348.686,162.728,353.402,168.545,353.402z M163.155,195.391l-26.211,21.069v136.942H31.602V216.46H0v-21.069h73.738
            v-30.546H46.506v-12.296h27.232V90.051h10.534v62.498h27.233v12.296H84.272v30.546H163.155z M117.913,282.062h-34.28v31.457h34.28
            V282.062z M117.913,231.651h-34.28v31.458h34.28V231.651z"
          />
        </svg>
      );
    case 'VolumeMute':
      return (
        <svg x="0px" y="0px" width="19px" height="19px" viewBox="0 0 54 54">
          <g>
            <path
              fill={fill}
              d="M46.414,26l7.293-7.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L45,24.586l-7.293-7.293
                c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L43.586,26l-7.293,7.293c-0.391,0.391-0.391,1.023,0,1.414
                C36.488,34.902,36.744,35,37,35s0.512-0.098,0.707-0.293L45,27.414l7.293,7.293C52.488,34.902,52.744,35,53,35
                s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L46.414,26z"
            />
            <path
              fill={fill}
              d="M26.894,4c-0.551,0-1.097,0.153-1.579,0.444c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,16H1c-0.553,0-1,0.447-1,1v19
                c0,0.553,0.447,1,1,1h10.61l13.543,12.436c0.05,0.046,0.104,0.086,0.161,0.12C25.797,49.847,26.343,50,26.894,50
                C28.606,50,30,48.584,30,46.844V7.156C30,5.416,28.606,4,26.894,4z M13,35c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4
                c0-0.553,0.447-1,1-1s1,0.447,1,1V35z M13,22c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1V22z"
            />
          </g>
        </svg>
      );
    case 'VolumeLow':
      return (
        <svg x="0px" y="1px" width="19px" height="19px" viewBox="0 0 54 47">
          <g>
            <path
              fill={fill}
              d="M28.38,0c-0.551,0-1.097,0.153-1.579,0.444c-0.046,0.027-0.09,0.059-0.13,0.093L13.121,12H2.487c-0.553,0-1,0.447-1,1v19
                c0,0.553,0.447,1,1,1h10.61L26.64,45.436c0.05,0.046,0.104,0.086,0.161,0.12C27.284,45.847,27.83,46,28.38,46
                c1.713,0,3.106-1.416,3.106-3.156V3.156C31.487,1.416,30.093,0,28.38,0z M14.487,31c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4
                c0-0.553,0.447-1,1-1s1,0.447,1,1V31z M14.487,18c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1V18z"
            />
            <path
              fill={fill}
              d="M44.513,22.5c0-5.972-4.009-11.302-9.749-12.962c-0.533-0.151-1.084,0.152-1.238,0.684
                c-0.153,0.53,0.152,1.085,0.684,1.238c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04
                c-0.531,0.153-0.837,0.708-0.684,1.238c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039
                C40.504,33.802,44.513,28.472,44.513,22.5z"
            />
          </g>
        </svg>
      );
    case 'VolumeMid':
      return (
        <svg x="0px" y="0px" width="19px" height="19px" viewBox="0 0 54 54">
          <g>
            <path
              fill={fill}
              d="M26.894,3.013c-0.551,0-1.097,0.153-1.579,0.444c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,15.013H1c-0.553,0-1,0.447-1,1
                v19c0,0.553,0.447,1,1,1h10.61l13.543,12.436c0.05,0.046,0.104,0.086,0.161,0.12c0.482,0.291,1.028,0.444,1.579,0.444
                c1.713,0,3.106-1.416,3.106-3.156V6.169C30,4.429,28.606,3.013,26.894,3.013z M13,34.013c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4
                c0-0.553,0.447-1,1-1s1,0.447,1,1V34.013z M13,21.013c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1V21.013
                z"
            />
            <path
              fill={fill}
              d="M38.797,7.066c-0.523-0.177-1.091,0.103-1.269,0.626c-0.177,0.522,0.103,1.091,0.626,1.269
                c7.101,2.411,11.872,9.063,11.872,16.553c0,7.483-4.762,14.136-11.849,16.554c-0.522,0.178-0.802,0.746-0.623,1.27
                c0.142,0.415,0.53,0.677,0.946,0.677c0.107,0,0.216-0.017,0.323-0.054c7.896-2.693,13.202-10.106,13.202-18.446
                C52.026,17.167,46.71,9.753,38.797,7.066z"
            />
            <path
              fill={fill}
              d="M43.026,25.513c0-5.972-4.009-11.302-9.749-12.962c-0.533-0.151-1.084,0.152-1.238,0.684
                c-0.153,0.53,0.152,1.085,0.684,1.238c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04
                c-0.531,0.153-0.837,0.708-0.684,1.238c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039
                C39.018,36.815,43.026,31.485,43.026,25.513z"
            />
          </g>
        </svg>
      );
    case 'VolumeHigh':
      return (
        <svg x="0px" y="0px" width="19px" height="19px" viewBox="0 0 54 60">
          <g>
            <path
              fill={fill}
              d="M26.894,7.358c-0.551,0-1.097,0.153-1.579,0.444c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,19.358H1c-0.553,0-1,0.447-1,1
                v19c0,0.266,0.105,0.52,0.293,0.707S0.734,40.358,1,40.358l10.61-0.005l13.543,12.44c0.05,0.046,0.104,0.086,0.161,0.12
                c0.482,0.291,1.028,0.444,1.579,0.444c1.713,0,3.106-1.416,3.106-3.156V10.514C30,8.774,28.606,7.358,26.894,7.358z M13,38.358
                c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1V38.358z M13,25.358c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4
                c0-0.553,0.447-1,1-1s1,0.447,1,1V25.358z"
            />
            <path
              fill={fill}
              d="M52.026,29.858c0-8.347-5.316-15.76-13.229-18.447c-0.522-0.177-1.091,0.103-1.269,0.626
                c-0.177,0.522,0.103,1.091,0.626,1.269c7.101,2.411,11.872,9.063,11.872,16.553c0,7.483-4.762,14.136-11.849,16.554
                c-0.522,0.178-0.802,0.746-0.623,1.27c0.142,0.415,0.53,0.677,0.946,0.677c0.107,0,0.216-0.017,0.323-0.054
                C46.721,45.611,52.026,38.198,52.026,29.858z"
            />
            <path
              fill={fill}
              d="M44.453,6.374c-0.508-0.213-1.095,0.021-1.312,0.53C42.926,7.413,43.163,8,43.672,8.216C52.376,11.909,58,20.405,58,29.858
                c0,9.777-5.894,18.38-15.015,21.914c-0.515,0.2-0.771,0.779-0.571,1.294c0.153,0.396,0.532,0.639,0.933,0.639
                c0.12,0,0.242-0.021,0.361-0.067C53.605,49.801,60,40.467,60,29.858C60,19.6,53.897,10.382,44.453,6.374z"
            />
            <path
              fill={fill}
              d="M43.026,29.858c0-5.972-4.009-11.302-9.749-12.962c-0.53-0.151-1.084,0.152-1.238,0.684
                c-0.153,0.53,0.152,1.085,0.684,1.238c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04
                c-0.531,0.153-0.837,0.708-0.684,1.238c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039
                C39.018,41.159,43.026,35.829,43.026,29.858z"
            />
          </g>
        </svg>
      );
    case 'Loading':
      return (
        <svg x="0px" y="0px" width="19px" height="19px" viewBox="0 0 16 16">
          <g>
            <path
              fill={fill}
              d="M2.083,9H0.062H0v5l1.481-1.361C2.932,14.673,5.311,16,8,16c4.08,0,7.446-3.054,7.938-7h-2.021
                c-0.476,2.838-2.944,5-5.917,5c-2.106,0-3.96-1.086-5.03-2.729L5.441,9H2.083z"
            />
            <path
              fill={fill}
              d="M8,0C3.92,0,0.554,3.054,0.062,7h2.021C2.559,4.162,5.027,2,8,2c2.169,0,4.07,1.151,5.124,2.876
                L11,7h2h0.917h2.021H16V2l-1.432,1.432C13.123,1.357,10.72,0,8,0z"
            />
          </g>
        </svg>
      );
    case 'Verified':
      return (
        <svg x="0px" y="0px" width="23px" height="23px" viewBox="0 0 512 512">
          <g>
            <g>
              <path
                fill={fill}
                d="M437.019,74.98C388.667,26.629,324.38,0,256,0C187.619,0,123.331,26.629,74.98,74.98C26.628,123.332,0,187.62,0,256
                  s26.628,132.667,74.98,181.019C123.332,485.371,187.619,512,256,512c68.38,0,132.667-26.629,181.019-74.981
                  C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30
                  s226,101.383,226,226S380.617,482,256,482z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                fill={fill}
                d="M378.305,173.859c-5.857-5.856-15.355-5.856-21.212,0.001L224.634,306.319l-69.727-69.727
                  c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213l80.333,80.333c2.929,2.929,6.768,4.393,10.606,4.393
                  c3.838,0,7.678-1.465,10.606-4.393l143.066-143.066C384.163,189.215,384.163,179.717,378.305,173.859z"
              />
            </g>
          </g>
        </svg>
      );
    case 'Filter':
      return (
        <svg x="0px" y="0px" width="23px" height="23px" viewBox="0 0 459 459">
          <path fill={fill} d="M178.5,382.5h102v-51h-102V382.5z M0,76.5v51h459v-51H0z M76.5,255h306v-51h-306V255z" />
        </svg>
      );
    default:
      return null;
  }
}
