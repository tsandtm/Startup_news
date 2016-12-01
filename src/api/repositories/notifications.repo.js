"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var repositories_base_1 = require('./repositories.base');
var notifications_model_1 = require('../models/notifications.model');
var NotificationsRepo = (function (_super) {
    __extends(NotificationsRepo, _super);
    function NotificationsRepo() {
        _super.call(this);
    }
    NotificationsRepo.prototype.getList = function (option) {
        var queryText = 'SELECT * FROM public."n_Notifications"ORDER BY "NotifiID"ASC  ';
        console.info('Excute: ' + queryText);
        var pResult;
        if (option) {
            pResult = this._pgPool.query(queryText, [option.id, option.TieuDe]);
        }
        else {
            pResult = this._pgPool.query(queryText);
        }
        return pResult.then(function (result) {
            var notifications = result.rows.map(function (r) {
                var notification = new notifications_model_1.Notifications();
                notification.id = r.NotifiID;
                notification.AppID = r.AppID;
                notification.TieuDe = r.TieuDe;
                notification.NoiDung = r.NoiDung;
                notification.ThoiGianGui = r.ThoiGianGui;
                notification.ThoiHanToiDa = r.ThoiHanToiDa;
                notification.DoUuTien = r.DoUuTien;
                notification.TrangThaiGoi = r.TrangThaiGoi;
                notification.SoLuong = r.SoLuong;
                return notification;
            });
            return notifications;
        })
            .catch(function (err) {
            console.error(err.message);
            return null;
        });
    };
    NotificationsRepo.prototype.getOne = function (option) {
        //  let queryText = 'SELECT "NotifiID", "AppID", "TieuDe", "NoiDung", "ThoiGianGui", "ThoiHanToiDa", "DoUuTien", "TrangThaiGoi", "SoLuong"FROM public."n_Notifications"; where NotifiID=id';
        var queryText = 'SELECT "NotifiID", "AppID", "TieuDe", "NoiDung", "ThoiGianGui", "ThoiHanToiDa", "DoUuTien", "TrangThaiGoi", "SoLuong"FROM public."n_Notifications"; where id=$1';
        console.info('Excute: ' + queryText);
        return this._pgPool.query(queryText, [option.id, option.TieuDe])
            .then(function (result) {
            var notifications = new notifications_model_1.Notifications();
            notifications.id = result.rows[0].id;
            notifications.AppID = result.rows[0].AppID;
            notifications.TieuDe = result.rows[0].TieuDe;
            notifications.NoiDung = result.rows[0].NoiDung;
            notifications.ThoiGianGui = result.rows[0].ThoiGianGui;
            notifications.ThoiHanToiDa = result.rows[0].ThoiHanToiDa;
            notifications.DoUuTien = result.rows[0].DoUuTien;
            notifications.TrangThaiGoi = result.rows[0].TrangThaiGoi;
            notifications.SoLuong = result.rows[0].SoLuong;
            return notifications;
        });
    };
    return NotificationsRepo;
}(repositories_base_1.RepoBase));
exports.NotificationsRepo = NotificationsRepo;