const mongoose = require('mongoose');

const companyInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre de la empresa es requerido'],
    trim: true
  },
  slogan: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  mission: {
    type: String,
    trim: true
  },
  vision: {
    type: String,
    trim: true
  },
  values: [{
    type: String,
    trim: true
  }],
  contact: {
    email: {
      type: String,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
    country: {
      type: String,
      trim: true
    }
  },
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
    github: String,
    youtube: String
  },
  logo: {
    type: String,
    trim: true
  },
  foundedYear: {
    type: Number
  },
  teamSize: {
    type: Number
  },
  stats: {
    projectsCompleted: {
      type: Number,
      default: 0
    },
    happyClients: {
      type: Number,
      default: 0
    },
    yearsExperience: {
      type: Number,
      default: 0
    },
    awards: {
      type: Number,
      default: 0
    }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Solo debe haber un documento de información de la empresa
companyInfoSchema.statics.getSingleton = async function() {
  let companyInfo = await this.findOne();
  if (!companyInfo) {
    companyInfo = await this.create({
      name: 'Mi Empresa',
      slogan: 'Innovación y calidad'
    });
  }
  return companyInfo;
};

module.exports = mongoose.model('CompanyInfo', companyInfoSchema);
