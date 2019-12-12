export class User {
  /**
   * @type {Date}
   */
  createdAt;
  /**
   * @type {Date}
   */
  updatedAt;
  /**
   * @type {String}
   */
  username;
  /**
   * @type {String}
   */
  firstname;
  /**
   * @type {String}
   */
  lastname;
  /**
   * @type {String}
   */
  email;
  /**
   * `?` == optional
   * @type {?String}
   */
  picture;
  /**
   * @type {?Date}
   */
  birthdate;
  /**
   * @type {Number}
   */
  fidelity;
  /**
   * @type {?String}
   */
  city;
  /**
   * @type {?String}
   */
  zipcode;
  /**
   * @type {?String}
   */
  address;
  /**
   * @type {?String}
   */
  phone;
  /**
   * @type {Boolean}
   */
  isEmailValid;
  /**
   * @type {Boolean}
   */
  newsletterSubscribed;
  /**
   * @type {Appointment[]}
   */
  appointments;
  /**
   * @type {Role[]}
   */
  roles;
  /**
   * @type {Feedback[]}
   */
  feedbacks;
  /**
   * @type {Comment[]}
   */
  comments;
}
