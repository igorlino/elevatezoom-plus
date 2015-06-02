<a name="1.1.2"></a>

# 1.1.2 (2015-01-June)

- Corrected hundreds of JSHint errors/warnings
- Added JSCS code style validation.
- Corrected hundreds of JSCS warnings.
- Fixed unwanted global variables.
- Fixed closeAll method not working at all.

<a name="1.1.1"></a>

# 1.1.1 (2015-01-June)

- Feature: Adding support to multiple galleries. …
This change provides:
    Flexibility to select the element with a another selector different of the id. Providing you support to multiples galleries.
    Adding galleryItem option to choose another item type
    All elements added to gallery, now inherit the onclick event
- Fix width scale error
- Feature: Added callback function 'onDestroy'. It is useful to destroy/hide 'zoomContainer' div when working with single page application (e.g; AngularJS application)
- Remove support for deprecated mousewheel event and replace with wheel  event.
See: https://developer.mozilla.org/en-US/docs/Web/Events/mousewheel
- Add z_index option to set z-index of container.
- Fix: round lens position to avoid border flickering.
- Fixed broken CSS
- Fix: remove -webkit-transform: translateZ(0); because it breaks z-index properties
- Improvement: Renamed "Postition" to "Position" for better consistency.
- Improvement: Change cursor default value to inherit
- Feature: Add mantainZoomAspectRatio as option. This change will allow to decide if you want to decrease zoom of one of the dimensions once the other reached it's top value, or keep the aspect ratio, default behaviour still being as always, allow to continue zooming out, so it keeps retrocompatibility.
- Improvement: Added callback for when zoomWindow is just about to be shown. The zoomWindow would often fall offscreen, so I added a callback just before it is shown so that repositioning it is possible.
- Improvement: Optimizes calls to css(), width() and height() for performance reasons.
Profiling has shown that calls of the jquery css() method consumed very much time when moving the lens. This resulted in lags when moving the lens fast in Firefox and IE. By optimizing the css() calls (and also width() / height() methods) and the their parameters, the lags are now almost gone.
- Fixed Duplicate self.options.zoomWindowWidth
- Move zoom container parent selector to options.
- Fix lens proportion calculation. The condition was incorrectly checking for the width of the zoom window instead of the height, causing the lens to be equal height with the non-zoomed image when the actual viewport was smaller
- add option to specify a click callback (for the large image) add API document



<a name="1.0.0"></a>

# 1.0.0 (2015-28-May)
- build v1.0.1
- Initial commit, it includes bower repository settings.
- Refactor naming.
