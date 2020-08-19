package models

import "github.com/jinzhu/gorm"

type User struct {
	ID       uint32 `gorm:"primary_key;auto_increment" json:"id"`
	Username string `gorm:"size:30;not null;" json:"username"`
	Email    string `gorm:"size:50;not null;unique" json:"email"`
	Password string `gorm:"size:20;not null;" json:"password"`
}

func (u *User) FindAllUsers(db *gorm.DB) (*[]User, error) {
	var err error
	users := []User{}
	err = db.Debug().Model(&User{}).Limit(10).Find(&users).Error
	if err != nil {
		return &[]User{}, err
	}
	return &users, err
}
