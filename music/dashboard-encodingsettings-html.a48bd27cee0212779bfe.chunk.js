"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8602],{11801:function(e,i,t){t.r(i),i.default='<div id="encodingSettingsPage" data-role="page" class="page type-interior playbackConfigurationPage withTabs"> <div> <div class="content-primary"> <form class="encodingSettingsForm"> <div class="verticalSection"> <div class="sectionTitleContainer flex align-items-center"> <h2 class="sectionTitle">${Transcoding}</h2> <a is="emby-linkbutton" rel="noopener noreferrer" class="raised button-alt headerHelpButton" target="_blank" href="https://docs.jellyfin.org/general/server/transcoding.html">${Help}</a> </div> </div> <div class="selectContainer"> <select is="emby-select" id="selectVideoDecoder" label="${LabelHardwareAccelerationType}"> <option value="">${None}</option> <option value="amf">AMD AMF</option> <option value="nvenc">Nvidia NVENC</option> <option value="qsv">Intel QuickSync (QSV)</option> <option value="vaapi">Video Acceleration API (VAAPI)</option> <option value="videotoolbox">Apple VideoToolBox</option> <option value="v4l2m2m">Video4Linux2 (V4L2)</option> </select> <div class="fieldDescription"> <a is="emby-linkbutton" rel="noopener noreferrer" class="button-link" href="https://docs.jellyfin.org/general/administration/hardware-acceleration.html" target="_blank">${LabelHardwareAccelerationTypeHelp}</a> </div> </div> <div class="inputContainer hide fldVaapiDevice"> <input is="emby-input" type="text" id="txtVaapiDevice" label="${LabelVaapiDevice}"/> <div class="fieldDescription">${LabelVaapiDeviceHelp}</div> </div> <div class="hardwareAccelerationOptions hide"> <div class="checkboxListContainer decodingCodecsList"> <h3 class="checkboxListLabel">${LabelEnableHardwareDecodingFor}</h3> <div class="checkboxList"> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="h264" data-types="amf,nvenc,qsv,vaapi,videotoolbox,v4l2m2m"/> <span>H264</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="hevc" data-types="amf,nvenc,qsv,vaapi,videotoolbox"/> <span>HEVC</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="mpeg2video" data-types="amf,nvenc,qsv,vaapi,videotoolbox"/> <span>MPEG2</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="mpeg4" data-types="nvenc,videotoolbox"/> <span>MPEG4</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="vc1" data-types="amf,nvenc,qsv,vaapi,videotoolbox"/> <span>VC1</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="vp8" data-types="nvenc,qsv,vaapi,videotoolbox"/> <span>VP8</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="vp9" data-types="amf,nvenc,qsv,vaapi,videotoolbox"/> <span>VP9</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="av1" data-types="amf,nvenc,qsv,vaapi"/> <span>AV1</span> </label> </div> <div class="checkboxList hide fld10bitHevcVp9HwDecoding"> <label> <input type="checkbox" is="emby-checkbox" id="chkDecodingColorDepth10Hevc"/> <span>HEVC 10bit</span> </label> <label> <input type="checkbox" is="emby-checkbox" id="chkDecodingColorDepth10Vp9"/> <span>VP9 10bit</span> </label> </div> </div> <div class="checkboxListContainer hide fldEnhancedNvdec"> <label> <input type="checkbox" is="emby-checkbox" id="chkEnhancedNvdecDecoder"/> <span>${EnableEnhancedNvdecDecoder}</span> </label> </div> <div class="checkboxListContainer hide fldSysNativeHwDecoder"> <label> <input type="checkbox" is="emby-checkbox" id="chkSystemNativeHwDecoder"/> <span>${PreferSystemNativeHwDecoder}</span> </label> </div> <div class="checkboxListContainer"> <h3 class="checkboxListLabel">${LabelHardwareEncodingOptions}</h3> <div class="checkboxList"> <label> <input type="checkbox" is="emby-checkbox" id="chkHardwareEncoding"/> <span>${EnableHardwareEncoding}</span> </label> </div> <div class="checkboxList hide fldIntelLp"> <label> <input type="checkbox" is="emby-checkbox" id="chkIntelLpH264HwEncoder"/> <span>${EnableIntelLowPowerH264HwEncoder}</span> </label> <label> <input type="checkbox" is="emby-checkbox" id="chkIntelLpHevcHwEncoder"/> <span>${EnableIntelLowPowerHevcHwEncoder}</span> </label> <div class="fieldDescription"> <a is="emby-linkbutton" rel="noopener noreferrer" class="button-link" href="https://01.org/linuxgraphics/downloads/firmware" target="_blank">${IntelLowPowerEncHelp}</a> </div> </div> </div> </div> <div class="checkboxListContainer"> <div class="checkboxList"> <label> <input type="checkbox" is="emby-checkbox" id="chkAllowHevcEncoding"/> <span>${AllowHevcEncoding}</span> </label> </div> </div> <div class="vppTonemappingOptions hide"> <div class="checkboxListContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkVppTonemapping"/> <span>${EnableVppTonemapping}</span> </label> <div class="fieldDescription checkboxFieldDescription">${AllowVppTonemappingHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtVppTonemappingBrightness" pattern="[0-9]*" min="0" max="100" step=".00001" label="${LabelVppTonemappingBrightness}"/> <div class="fieldDescription">${LabelVppTonemappingBrightnessHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtVppTonemappingContrast" pattern="[0-9]*" min="1" max="2" step=".00001" label="${LabelVppTonemappingContrast}"/> <div class="fieldDescription">${LabelVppTonemappingContrastHelp}</div> </div> </div> <div class="tonemappingOptions hide"> <div class="checkboxListContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkTonemapping"/> <span>${EnableTonemapping}</span> </label> <div class="fieldDescription checkboxFieldDescription">${AllowTonemappingHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectTonemappingAlgorithm" label="${LabelTonemappingAlgorithm}"> <option value="none">None</option> <option value="clip">Clip</option> <option value="linear">Linear</option> <option value="gamma">Gamma</option> <option value="reinhard">Reinhard</option> <option value="hable">Hable</option> <option value="mobius">Mobius</option> <option value="bt2390">BT.2390</option> </select> <div class="fieldDescription"> <a is="emby-linkbutton" rel="noopener noreferrer" class="button-link" href="http://ffmpeg.org/ffmpeg-all.html#tonemap_005fopencl" target="_blank">${TonemappingAlgorithmHelp}</a> </div> </div> <div class="selectContainer"> <select is="emby-select" id="selectTonemappingRange" label="${LabelTonemappingRange}"> <option value="auto">${Auto}</option> <option value="tv">TV</option> <option value="pc">PC</option> </select> <div class="fieldDescription">${TonemappingRangeHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtTonemappingDesat" pattern="[0-9]*" min="0" max="1.79769e+308" step=".00001" label="${LabelTonemappingDesat}"/> <div class="fieldDescription">${LabelTonemappingDesatHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtTonemappingThreshold" pattern="[0-9]*" min="0" max="1.79769e+308" step=".00001" label="${LabelTonemappingThreshold}"/> <div class="fieldDescription">${LabelTonemappingThresholdHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtTonemappingPeak" pattern="[0-9]*" min="0" max="1.79769e+308" step=".00001" label="${LabelTonemappingPeak}"/> <div class="fieldDescription">${LabelTonemappingPeakHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtTonemappingParam" pattern="[0-9]*" min="2.22507e-308" max="1.79769e+308" step=".00001" label="${LabelTonemappingParam}"/> <div class="fieldDescription">${LabelTonemappingParamHelp}</div> </div> </div> <div class="selectContainer"> <select is="emby-select" id="selectThreadCount" label="${LabelTranscodingThreadCount}"> <option value="-1">${Auto}</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="0">${OptionMax}</option> </select> <div class="fieldDescription">${LabelTranscodingThreadCountHelp}</div> </div> <div class="inputContainer fldEncoderPath"> <div style="display:flex;align-items:center"> <div style="flex-grow:1"> <input is="emby-input" class="txtEncoderPath" label="${LabelffmpegPath}" autocomplete="off"/> </div> <button type="button" is="paper-icon-button-light" id="btnSelectEncoderPath" class="emby-input-iconbutton"><span class="material-icons search" aria-hidden="true"></span></button> </div> <div class="fieldDescription"> <div>${LabelffmpegPathHelp}</div> </div> </div> <div class="inputContainer"> <div style="display:flex;align-items:center"> <div style="flex-grow:1"> <input is="emby-input" id="txtTranscodingTempPath" label="${LabelTranscodePath}" autocomplete="off"/> </div> <button type="button" is="paper-icon-button-light" id="btnSelectTranscodingTempPath" class="emby-input-iconbutton"><span class="material-icons search" aria-hidden="true"></span></button> </div> <div class="fieldDescription">${LabelTranscodingTempPathHelp}</div> </div> <div class="inputContainer"> <div style="display:flex;align-items:center"> <div style="flex-grow:1"> <input is="emby-input" id="txtFallbackFontPath" label="${LabelFallbackFontPath}" autocomplete="off"/> </div> <button type="button" is="paper-icon-button-light" id="btnSelectFallbackFontPath" class="emby-input-iconbutton"><span class="material-icons search" aria-hidden="true"></span></button> </div> <div class="fieldDescription">${LabelFallbackFontPathHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableFallbackFont"/> <span>${EnableFallbackFont}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableFallbackFontHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtDownMixAudioBoost" pattern="[0-9]*" required="required" min=".5" max="3" step=".1" label="${LabelDownMixAudioScale}"/> <div class="fieldDescription">${LabelDownMixAudioScaleHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtMaxMuxingQueueSize" pattern="[0-9]*" required="required" min="128" max="2147483647" step="1" label="${LabelMaxMuxingQueueSize}"/> <div class="fieldDescription">${LabelMaxMuxingQueueSizeHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectEncoderPreset" label="${LabelEncoderPreset}"> <option value="">${Auto}</option> <option value="veryslow">veryslow</option> <option value="slower">slower</option> <option value="slow">slow</option> <option value="medium">medium</option> <option value="fast">fast</option> <option value="faster">faster</option> <option value="veryfast">veryfast</option> <option value="superfast">superfast</option> <option value="ultrafast">ultrafast</option> </select> <div class="fieldDescription">${EncoderPresetHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtH265Crf" pattern="[0-9]*" min="0" max="51" step="1" label="${LabelH265Crf}"/> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtH264Crf" pattern="[0-9]*" min="0" max="51" step="1" label="${LabelH264Crf}"/> <div class="fieldDescription">${H264CrfHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectDeinterlaceMethod" label="${LabelDeinterlaceMethod}"> <option value="yadif">${Yadif}</option> <option value="bwdif">${Bwdif}</option> </select> <div class="fieldDescription">${DeinterlaceMethodHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input is="emby-checkbox" type="checkbox" id="chkDoubleRateDeinterlacing"/> <span>${UseDoubleRateDeinterlacing}</span> </label> <div class="fieldDescription checkboxFieldDescription">${UseDoubleRateDeinterlacingHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableSubtitleExtraction"/> <span>${AllowOnTheFlySubtitleExtraction}</span> </label> <div class="fieldDescription checkboxFieldDescription">${AllowOnTheFlySubtitleExtractionHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableThrottling"/> <span>${AllowFfmpegThrottling}</span> </label> <div class="fieldDescription checkboxFieldDescription">${AllowFfmpegThrottlingHelp}</div> </div> <div> <button is="emby-button" type="submit" class="raised button-submit block"> <span>${Save}</span> </button> </div> </form> </div> </div> </div> '}}]);