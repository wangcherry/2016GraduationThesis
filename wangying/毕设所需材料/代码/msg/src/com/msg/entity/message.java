package com.msg.entity;

/**
 * Created by kx on 16/1/5.
 */
public class message {
    private String m_id;
    private String m_name;
    private String type;
    private String text;
    private String picture;
    private String sound;
    private String video;
    private String date;

    @Override
    public String toString() {
        return "message{" +
                "m_id='" + m_id + '\'' +
                ", m_name='" + m_name + '\'' +
                ", type='" + type + '\'' +
                ", text='" + text + '\'' +
                ", picture='" + picture + '\'' +
                ", sound='" + sound + '\'' +
                ", video='" + video + '\'' +
                ", date='" + date + '\'' +
                '}';
    }

    public String getM_id() {
        return m_id;
    }

    public void setM_id(String m_id) {
        this.m_id = m_id;
    }

    public String getM_name() {
        return m_name;
    }

    public void setM_name(String m_name) {
        this.m_name = m_name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getSound() {
        return sound;
    }

    public void setSound(String sound) {
        this.sound = sound;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
