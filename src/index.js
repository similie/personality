import './index.css';
// import Uploader from './uploader';

/**
 * Timeout when loader should be removed
 */
const LOADER_DELAY = 500;

/**
 * @typedef {object} PersonalityToolData
 * @description Personality Tool's input and output data format
 * @property {string} name — person's name
 * @property {string} description - person's description
 * @property {string} link - link to person's website
 * @property {string} photo - person's photo url
 */

/**
 * @typedef {object} PersonalityConfig
 * @description Config supported by Tool
 * @property {string} endpoint - image file upload url
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
 * @property {string} namePlaceholder - placeholder for name field
 * @property {string} descriptionPlaceholder - description placeholder
 * @property {string} linkPlaceholder - link placeholder
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */

/**
 * Personality Tool for the Editor.js
 */
export default class Personality {
  /**
   * @param {PersonalityToolData} data - Tool's data
   * @param {PersonalityConfig} config - Tool's config
   * @param {API} api - Editor.js API
   */
  constructor({ data, config, api, readOnly }) {
    this.api = api;

    this.nodes = {
      date: null,
      wrapper: null,
      name: null,
      description: null,
      link: null,
      photo: null,
      recipients: null
    };

    this.config = {
      actions: config.actions || this.noop
    };
    this.readOnly = readOnly;
    /**
     * Set saved state
     */
    this.messageReplyEvent = 'message-reply-event';
    this.data = data;
  }

  /**
   * So beached
   *
   */
  noop() {}

  /**
   * So beached
   *
   */
  static get isInline() {
    return false;
  }

  /**
   * So beached
   *
   */
  static get displayInToolbox() {
    return false;
  }

  /**
   * So beached
   *
   */
  static get isTune() {
    return false;
  }

  /**
   * Allows readonly support
   *
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return false;
    /*
     *   return {
     *     icon: `<svg width="13" height="14" xmlns="http://www.w3.org/2000/svg">
     *     <path d="M5.27 7.519a3.114 3.114 0 0 1-1.014-.44 3.354 3.354 0 0 1-.973-1.002C2.865 5.42 2.65 4.62 2.65 3.8c0-.82.215-1.62.633-2.277.251-.394.574-.737.973-1.002a3.094 3.094 0 0 1 3.438 0c.399.265.722.608.973 1.002.418.657.633 1.456.633 2.277 0 .82-.215 1.62-.633 2.277a3.353 3.353 0 0 1-.973 1.002c-.31.206-.655.357-1.023.442.93.054 1.826.212 2.591.45.503.155.95.345 1.324.576.27.167.511.358.725.6a2.441 2.441 0 0 1-.109 3.408c-.25.247-.525.424-.828.568-.38.181-.816.311-1.32.413-.853.172-1.937.264-3.079.264-1.142 0-2.226-.092-3.078-.264-.505-.102-.941-.232-1.321-.413a2.969 2.969 0 0 1-.828-.568 2.449 2.449 0 0 1-.13-3.384c.21-.246.45-.441.717-.61a5.63 5.63 0 0 1 1.316-.587c.77-.243 1.675-.403 2.618-.455zM5.974 5.5c.594 0 1.075-.761 1.075-1.7s-.481-1.7-1.075-1.7S4.9 2.861 4.9 3.8s.481 1.7 1.075 1.7zm0 6.05c2.057 0 3.725-.336 3.725-.75S8.007 9.75 5.95 9.75s-3.7.636-3.7 1.05c0 .414 1.668.75 3.725.75z" id="a"/>
     * </svg>`,
     *     title: 'Personality'
     *   };
     */
  }

  /**
   * File uploading callback
   * @param {UploadResponseFormat} response
   */
  /*
   * onUpload(response) {
   *   const {
   *     body: { success, file }
   *   } = response;
   */

  /*
   *   if (success && file && file.url) {
   *     this.data.photo = file.url;
   */

  /*
   *     this.showFullImage();
   *   }
   * }
   */

  /**
   * On success: remove loader and show full image
   */
  /*
   * showFullImage() {
   *   setTimeout(() => {
   *     this.nodes.photo.classList.remove(this.CSS.loader);
   *     this.nodes.photo.style.background = `url('${this.data.photo}') center center / cover no-repeat`;
   *   }, LOADER_DELAY);
   * }
   */

  /**
   * On fail: remove loader and reveal default image placeholder
   */
  /*
   * stopLoading() {
   *   setTimeout(() => {
   *     this.nodes.photo.classList.remove(this.CSS.loader);
   *     this.nodes.photo.removeAttribute('style');
   *   }, LOADER_DELAY);
   * }
   */

  // /**
  //  * Show loader when file upload started
  //  */
  // addLoader() {
  //   this.nodes.photo.style.background = 'none';
  //   this.nodes.photo.classList.add(this.CSS.loader);
  // }

  // /**
  //  * If file uploading failed, remove loader and show notification
  //  * @param {string} errorMessage -  error message
  //  */
  // uploadingFailed(errorMessage) {
  //   this.stopLoading();

  /*
   *   this.api.notifier.show({
   *     message: errorMessage,
   *     style: 'error'
   *   });
   * }
   */

  /**
   * Tool's CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      loader: this.api.styles.loader,

      /**
       * Tool's classes
       */
      recipient: 'cdx-personality__recipient',
      recipientImage: 'cdx-personality__recipient_image',
      recipientImageHas: 'cdx-personality__recipient_image_has',
      recipientText: 'cdx-personality__recipient_text',
      wrapper: 'cdx-personality',
      name: 'cdx-personality__name',
      photo: 'cdx-personality__photo',
      reply: 'cdx-personality__reply',
      task: 'cdx-personality__task',
      taskContent: 'cdx-personality__task_content',
      replyIcon: ['fa', 'fa-reply'],
      signWrapper: 'cdx-personality-sign',
      signPhoto: 'cdx-personality-sign__photo',
      signName: 'cdx-personality-sign__name',
      signDate: 'cdx-personality-sign__date',
      link: 'cdx-personality__link',
      description: 'cdx-personality__description',
      delimter: 'cdx-personality-delimiter'
    };
  }

  /**
   * Return Block data
   * @param {HTMLElement} toolsContent
   * @return {PersonalityToolData}
   */
  save(toolsContent) {
    /*
     * const name = toolsContent.querySelector(`.${this.CSS.name}`).textContent;
     * const description = toolsContent.querySelector(`.${this.CSS.description}`)
     *   .textContent;
     * const link = toolsContent.querySelector(`.${this.CSS.link}`).textContent;
     * const photo = this.data.photo;
     */

    return this.data;
  }

  /**
   * signWrapper: 'cdx-personality-sign',
   * signPhoto: 'cdx-personality-sign__photo',
   * signName: 'cdx-personality-sign__name',
   * signDate: 'cdx-personality-sign__date',
   * @return {HTMLDivElement}
   */
  __renderSignature() {
    const { name, photo, date } = this.data;

    this.nodes.wrapper = this.make('div', this.CSS.signWrapper);
    this.nodes.photo = this.make('div', this.CSS.signPhoto);
    this.nodes.name = this.make('div', this.CSS.signName);
    this.nodes.date = this.make('div', this.CSS.signDate);
    if (photo) {
      this.nodes.photo.classList.add(`${this.CSS.signPhoto}_has`);
      this.nodes.photo.style.background = `url('${photo}') center center / cover no-repeat`;
    }

    if (name) {
      this.nodes.name.textContent = name;
    }

    if (date) {
      this.nodes.date.textContent = date;
    }

    this.nodes.wrapper.appendChild(this.nodes.photo);
    this.nodes.wrapper.appendChild(this.nodes.name);
    this.nodes.wrapper.appendChild(this.nodes.date);
    return this.nodes.wrapper;
  }

  /**
   * Renders Block a delimeter Element
   * @return {HTMLDivElement}
   */
  __buildDelimeter() {
    return this.make('div', this.CSS.delimter);
  }

  /**
   * Renders Block content
   * @return {HTMLDivElement}
   */
  render() {
    const {
      name,
      subject,
      photo,
      date,
      recipients,
      signature,
      delimeter,
      users,
      message,
      task,
      complete,
      approved,
      taskMessage,
      pastDue,
      canApprove
    } = this.data;

    if (signature) {
      return this.__renderSignature();
    }

    if (delimeter) {
      return this.__buildDelimeter();
    }

    this.nodes.wrapper = this.make('div', this.CSS.wrapper);

    this.nodes.description = this.make('div', this.CSS.description, {
      contentEditable: false
    });

    this.nodes.name = this.make('div', this.CSS.name, {
      contentEditable: false
    });

    this.nodes.link = this.make('div', this.CSS.link, {
      contentEditable: false
    });

    this.nodes.photo = this.make('div', this.CSS.photo);

    recipients.forEach((r, index) => {
      this.nodes['recipient_' + index] = this.make('div', this.CSS.recipient);
      const photoEl = this.make('div', this.CSS.recipientImage);

      if (r.photo) {
        photoEl.classList.add(this.CSS.recipientImageHas);
        photoEl.style.background = `url('${r.photo}') center center / cover no-repeat`;
      }
      this.nodes['recipient_' + index].appendChild(photoEl);

      const nameEl = this.make('div', this.CSS.recipientText);

      nameEl.textContent = r.name;

      this.nodes['recipient_' + index].appendChild(nameEl);
      this.nodes['recipient_' + index].style.right = index * 28 + 'px';
    });

    if (photo) {
      this.nodes.photo.classList.add(`${this.CSS.photo}_has`);
      this.nodes.photo.style.background = `url('${photo}') center center / cover no-repeat`;
    }

    if (name) {
      this.nodes.name.textContent = name;
    } else {
      this.nodes.name.dataset.placeholder = this.config.namePlaceholder;
    }

    if (subject) {
      this.nodes.description.textContent = subject;
    } else {
      this.nodes.description.dataset.placeholder = this.config.descriptionPlaceholder;
    }

    if (date) {
      this.nodes.link.textContent = date;
    } else {
      this.nodes.link.dataset.placeholder = this.config.linkPlaceholder;
    }

    const replyEl = this.make('div', this.CSS.reply);

    replyEl.appendChild(this.make('i', this.CSS.replyIcon));

    replyEl.addEventListener('click', () => {
      if (replyEl.classList.contains('disabled')) {
        return;
      }

      this.config.actions(this.messageReplyEvent, {
        users,
        message,
        task,
        canApprove,
        complete,
        approved
      });
    });

    if (task) {
      const taskEl = this.make('div', this.CSS.task);
      const taskContent = this.make('div', this.CSS.taskContent);

      if (complete) {
        taskEl.classList.add(`${this.CSS.task}_complete`);
      } else if (pastDue) {
        taskEl.classList.add(`${this.CSS.task}_due`);
      }
      taskContent.textContent = taskMessage;

      if (approved) {
        taskEl.classList.add(`${this.CSS.task}_approved`);
      }

      taskEl.appendChild(taskContent);

      this.nodes.wrapper.appendChild(taskEl);
      // taskEl.textContent = '';
    }

    this.nodes.wrapper.appendChild(this.nodes.photo);
    this.nodes.wrapper.appendChild(this.nodes.description);
    this.nodes.wrapper.appendChild(this.nodes.name);
    this.nodes.wrapper.appendChild(this.nodes.link);

    recipients.forEach((r, index) => {
      const node = this.nodes['recipient_' + index];

      this.nodes.wrapper.appendChild(node);
    });
    this.nodes.wrapper.appendChild(replyEl);

    return this.nodes.wrapper;
  }

  /**
   * Validate saved data
   * @param {PersonalityToolData} savedData - tool's data
   * @returns {boolean} - validation result
   */
  validate(savedData) {
    /**
     * Return false if fields are empty
     */
    return (
      savedData.name ||
      savedData.description ||
      savedData.link ||
      savedData.photo
    );
  }

  /**
   * Helper method for elements creation
   * @param tagName
   * @param classNames
   * @param attributes
   * @return {HTMLElement}
   */
  make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }
}
